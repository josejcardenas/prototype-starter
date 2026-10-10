from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

try:
    from app.routes.health import router as health_router
    from app.routes.message import router as message_router
except ModuleNotFoundError:
    from routes.health import router as health_router
    from routes.message import router as message_router

app = FastAPI(title="__PRODUCT_NAME__ API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5173", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router)
app.include_router(message_router)
