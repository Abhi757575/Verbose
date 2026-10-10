from fastapi import FastAPI
from backend.app.src.sling.routes import main_router

version = "v1"

app = FastAPI(
    title = "Verbose",
    description = "Verbose is a web application that provides a simple API for testing and monitoring.",
    version = version,
)

app.include_router(main_router, prefix=f"/api/{version}/verbose")

@main_router.get("/")
async def root():
    return {"message": "Welcome to the Verbose API!"}