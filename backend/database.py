from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import os

DATABASE_URL = os.getenv("postgresql://elearning_l2qi_user:Qe0NkTQf57DB5668dkqGiT47LNFjsrHh@dpg-d82o5rgg4nts73b6ta20-a.singapore-postgres.render.com/elearning_l2qi")

engine = create_engine(DATABASE_URL, pool_pre_ping=True)
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()
