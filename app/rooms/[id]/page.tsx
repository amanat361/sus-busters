"use client";

import React, { useState, useEffect } from "react";
import { Heading } from "@/components/primitives/heading";
import { getRoom, getRoomMessages, addMessageToRoom } from "@/app/lib/kv-store";
import { Room } from "@/app/lib/kv-store";
import MessageInput from "@/components/MessagesInput";

export default function RoomPage({ params }: { params: { id: string } }) {
  const [room, setRoom] = useState<Room | null>(null);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const fetchRoomData = async () => {
      const roomData = await getRoom(params.id);
      setRoom(roomData);
      const roomMessages = await getRoomMessages(params.id);
      setMessages(roomMessages);
    };

    fetchRoomData();

    const intervalId = setInterval(fetchRoomData, 2000); // Refresh every 50 milliseconds

    return () => clearInterval(intervalId);
  }, [params.id]);

  const handleSendMessage = async (message: string) => {
    await addMessageToRoom(params.id, message);
    setMessages((prevMessages) => [message, ...prevMessages]);
  };

  if (!room) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <Heading>{room.name}</Heading>
      <div>Room ID: {room.id}</div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Messages:</h2>
        {messages.length === 0 ? (
          <p>No messages yet</p>
        ) : (
          <ul className="list-disc pl-5">
            {messages.map((message, index) => (
              <React.Fragment key={index}>
                {message}
              </React.Fragment>
            ))}
          </ul>
        )}
      </div>
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}
