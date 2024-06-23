"use client";

import { Text } from "@/components/primitives/text";
import Link from "next/link";
import { useState } from "react";
import RoomCard from "./roomCard";
import CreateRoomButton from "@/components/createRoom";

export type Room = {
  id: string;
  color: string;
  name: string;
  questions: string[];
};

export default function RoomList() {
  const [rooms, setRooms] = useState<Room[]>([]);

  return (
    <div className="flex flex-col gap-4">
      {rooms.length === 0 && <Text>No rooms yet</Text>}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {rooms.map((room) => (
          <RoomCard key={room.id} {...room} />
        ))}
      </div>
      <CreateRoomButton
        currentRooms={rooms}
        onCreateRoom={(room) => setRooms((rooms) => [...rooms, room])}
      />
    </div>
  );
}
