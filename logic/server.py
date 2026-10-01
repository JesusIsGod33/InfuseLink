from fastapi import FastAPI, HTTPException
import httpx
import uvicorn

app = FastAPI(title="Local AI Bridge Logic", version="1.0.0")
OLLAMA_URL = "http://127.0.0.1:11434/api/generate"

@app.post("/infer")
async def run_inference(prompt: str, model: str = "llama3"):
    async with httpx.AsyncClient(timeout=60.0) as client:
        try:
            response = await client.post(OLLAMA_URL, json={"model": model, "prompt": prompt, "stream": False})
            return response.json()
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
