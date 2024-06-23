"use client";
import { getRoomName, getRoomQuestions } from "@/app/ai";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
import { Button } from "./primitives/button";
import { useState } from "react";
import { Room } from "@/app/rooms/roomList";

export default function CreateRoomButton({
  currentRooms,
  onCreateRoom,
}: {
  currentRooms: Room[];
  onCreateRoom: (room: Room) => void;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const randomHexColor = () => `#${Math.random().toString(16).substring(2, 6)}`;

  const createRoom = async () => {
    setIsLoading(true);
    const roomName = await getRoomName(currentRooms);
    // const roomQuestions = await getRoomQuestions();
    const roomQuestions = [] as string[];
    const roomId = Math.random().toString(36).substring(2, 6);
    const roomColor = randomHexColor();
    onCreateRoom({
      id: roomId,
      name: roomName,
      questions: roomQuestions,
      color: roomColor,
    });
    setIsLoading(false);
  };

  return (
    <Button onClick={createRoom} disabled={isLoading} className="w-fit">
      {isLoading ? "Creating room..." : "Create Room"}
      <PlusCircleIcon />
    </Button>
  );
}
