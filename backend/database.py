from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

DATABASE_URL = "postgresql://elearing_user:fJc7TsG06EnPBMXRIJAsg3Dclmy2iZTu@dpg-d77up09r0fns738bb4l0-a.oregon-postgres.render.com/elearning_vkyp"

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()