from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Course
from models import Lesson
router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/")
def create_course(title: str, description: str, db: Session = Depends(get_db)):
    course = Course(title=title, description=description)
    db.add(course)
    db.commit()
    return course

@router.post("/lesson")
def add_lesson(course_id: int, title: str, video_url: str, db: Session = Depends(get_db)):
    lesson = Lesson(course_id=course_id, title=title, video_url=video_url)
    db.add(lesson)
    db.commit()
    return lesson

@router.get("/")
def get_courses(db: Session = Depends(get_db)):
    return db.query(Course).all()

@router.get("/lesson/{course_id}")
def get_lessons(course_id: int, db:Session = Depends(get_db)):
    return db.query(Lesson).filter(Lesson.course_id == course_id).all()
                    