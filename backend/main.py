from fastapi import FastAPI
from src.sling.routes import main_router

version = "0.1.0"

app = FastAPI(
    title = "Verbose",
    description = "Verbose is a web application that provides a simple API for testing and monitoring.",
    version = version,
)

app.include_router(main_router, prefix=f"/api/{version}/verbose")

