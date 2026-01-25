from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

#also i want to make some offline games so that the person who visits my site can play the games
#games like snake game, love games, etc.

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Backend running"}
