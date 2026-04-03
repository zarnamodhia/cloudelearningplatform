from fastapi import APIRouter

router = APIRouter()

@router.post("/")
def update_progress(user_id: int, lesson_id: int, completed: bool):
    return {"status": "updated"}