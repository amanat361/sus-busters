"use client";
import { getRoomName } from "@/app/ai";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
import { Button } from "./primitives/button";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function CreateRoomButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [roomId, setRoomId] = useState(nanoid());
  const [roomName, setRoomName] = useState("");

  const createRoom = async () => {
    const roomName = await getRoomName();
    const roomId = nanoid();
    setRoomName(roomName);
    setRoomId(roomId);
  }

  return (
    <Button href={`/rooms/${roomId}`} disabled={isLoading}>
      {isLoading ? "Creating room..." : "Create Room"}
      <PlusCircleIcon />
    </Button>
  );
}
