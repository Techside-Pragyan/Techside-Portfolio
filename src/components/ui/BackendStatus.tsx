"use client";

import { useEffect, useState } from "react";
import { Database, Server, AlertCircle, CheckCircle2 } from "lucide-react";

export default function BackendStatus() {
  const [status, setStatus] = useState<"loading" | "connected" | "error">("loading");
  const [message, setMessage] = useState("Checking backend connection...");

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await fetch("/api/health");
        if (!response.ok) {
          throw new Error("Backend not responding");
        }
        
        const data = await response.json();
        
        if (data.database === "connected") {
          setStatus("connected");
          setMessage("Backend & Database Online");
        } else {
          setStatus("error");
          setMessage(`Backend OK, DB Error: ${data.database}`);
        }
      } catch (error) {
        console.error("Backend connection error:", error);
        setStatus("error");
        setMessage("Backend Disconnected. Is Python running?");
      }
    };

    checkBackend();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div 
        className={`flex items-center gap-3 px-4 py-3 rounded-full shadow-lg backdrop-blur-md border transition-all duration-300 ${
          status === "connected" 
            ? "bg-green-500/10 border-green-500/20 text-green-400" 
            : status === "error"
            ? "bg-red-500/10 border-red-500/20 text-red-400"
            : "bg-blue-500/10 border-blue-500/20 text-blue-400"
        }`}
      >
        {status === "loading" && <Server className="w-5 h-5 animate-pulse" />}
        {status === "connected" && <CheckCircle2 className="w-5 h-5" />}
        {status === "error" && <AlertCircle className="w-5 h-5" />}
        
        <span className="text-sm font-medium tracking-wide">
          {message}
        </span>
        
        {status === "connected" && (
          <Database className="w-4 h-4 ml-2 opacity-70" />
        )}
      </div>
    </div>
  );
}
