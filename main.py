from fastapi import FastAPI
import uvicorn
from app.Backend.datadase.database import engine, Base
from app.Backend.api.routers.crud_users import router as crud_users
from app.Backend.api.routers.auth_views import router as auth
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(crud_users)
app.include_router(auth)

# Определите домены, с которых разрешены запросы
origins = [
    # "http://localhost:3000",  # Например, для локальной разработки React
    "https://qsoops.github.io", # Замените на домен вашего фронтенда
    # "https://your-frontend-domain.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,  # Разрешить передачу куки (если требуется)
    allow_methods=["*"],      # Разрешить все HTTP методы (GET, POST, PUT, DELETE, ...)
    allow_headers=["*"],      # Разрешить все заголовки
)

Base.metadata.create_all(bind=engine)

if __name__ == '__main__':
    uvicorn.run('main:app', reload=True)