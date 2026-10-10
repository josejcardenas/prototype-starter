from pydantic import BaseModel, Field
from fastapi import APIRouter, HTTPException

router = APIRouter()


class MessageRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=1000)


class MessageResponse(BaseModel):
    answer: str
    received_message: str
    character_count: int


@router.post("/message", response_model=MessageResponse)
def create_message_response(payload: MessageRequest) -> MessageResponse:
    message = payload.message.strip()
    if not message:
        raise HTTPException(status_code=422, detail="Message cannot be blank.")

    return MessageResponse(
        answer=f"Backend received your message: {message}",
        received_message=message,
        character_count=len(message),
    )
