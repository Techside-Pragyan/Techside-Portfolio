from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI(title="Portfolio API")

# Setup CORS (Cross-Origin Resource Sharing)
# This allows our React frontend to communicate with this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], # Add your frontend URL here
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB Connection
MONGODB_URI = os.getenv("MONGODB_URI", "mongodb://localhost:27017/portfolio")
client = None
db = None

@app.on_event("startup")
async def startup_db_client():
    global client, db
    try:
        client = AsyncIOMotorClient(MONGODB_URI)
        db = client.get_default_database()
        print("Connected to MongoDB!")
    except Exception as e:
        print(f"Failed to connect to MongoDB: {e}")

@app.on_event("shutdown")
async def shutdown_db_client():
    if client:
        client.close()

# Root route
@app.get("/api")
async def root():
    return {"message": "Welcome to the Portfolio API"}

# Example route to test MongoDB connection
@app.get("/api/health")
async def health_check():
    if db is not None:
        try:
            # A simple ping command to test the database
            await client.admin.command('ping')
            return {"status": "ok", "database": "connected"}
        except Exception as e:
            return {"status": "error", "database": str(e)}
    return {"status": "error", "database": "not configured"}

# You can add more routes here (e.g., for projects, contact form, etc.)
# @app.get("/api/projects")
# async def get_projects():
#     projects = await db["projects"].find().to_list(100)
#     # Note: MongoDB _id fields are ObjectIds which aren't JSON serializable by default,
#     # you might need to convert them to strings before returning.
#     for p in projects:
#         p["_id"] = str(p["_id"])
#     return projects
