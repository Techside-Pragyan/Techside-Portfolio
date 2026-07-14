from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import motor.motor_asyncio
import os
from datetime import datetime

app = FastAPI(title="Techside Portfolio API")

# Setup CORS for the React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this in production to your specific frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Optional MongoDB Connection (Using local for now unless configured otherwise)
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URI)
db = client.portfolio_db

class ContactForm(BaseModel):
    name: str
    email: str
    message: str

@app.get("/api/status")
async def get_status():
    """Returns the live activity widget status."""
    return {
        "status": "online",
        "activity": "Coding right now",
        "indicator": "🟢"
    }

@app.post("/api/contact")
async def submit_contact(form: ContactForm):
    """Saves contact form submissions to MongoDB."""
    contact_data = form.model_dump()
    contact_data["created_at"] = datetime.utcnow()
    
    # Save to MongoDB
    await db.contacts.insert_one(contact_data)
    
    return {"message": "Thank you for your message! I'll get back to you soon."}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
