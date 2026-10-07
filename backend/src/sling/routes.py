from fastapi import APIRouter

main_router = APIRouter()

@main_router.get('/')
async def read_root():
    return {"message": "Hello World!"}

@main_router.get('/health')
async def health_check():
    return {"status": "healthy"}