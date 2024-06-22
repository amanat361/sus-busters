"use client";
import { getRoomName } from "@/app/ai";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
import { Button } from "./primitives/button";
import { useState } from "react";
import { nanoid } from "nanoid";
import { Room } from "@/app/rooms/roomList";

export default function CreateRoomButton({ onCreateRoom }: { onCreateRoom: (room: Room) => void }) {
  const [isLoading, setIsLoading] = useState(false);

  const createRoom = async () => {
    setIsLoading(true);
    const roomName = await getRoomName();
    const roomId = nanoid();
    onCreateRoom({ id: roomId, name: roomName });
    setIsLoading(false);
  }

  return (
    <Button onClick={createRoom} disabled={isLoading} className="w-fit">
      {isLoading ? "Creating room..." : "Create Room"}
      <PlusCircleIcon />
    </Button>
  );
}
