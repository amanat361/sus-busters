"use client";

import { useState } from 'react';
import { Button } from '@/components/primitives/button';
import { createRoom } from '@/app/lib/kv-store';
import { getRoomName } from '@/app/lib/ai';
import type { Room } from '@/app/lib/kv-store';

type CreateRoomButtonProps = {
  currentRooms: Room[];
  onCreateRoom: (room: Room) => void;
};

export default function CreateRoomButton({ currentRooms, onCreateRoom }: CreateRoomButtonProps) {
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateRoom = async () => {
    setIsCreating(true);
    try {
      const roomName = await getRoomName(currentRooms);
      const roomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
      const newRoom = await createRoom(roomName, roomColor);
      onCreateRoom(newRoom);
    } catch (error) {
      console.error('Failed to create room:', error);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <Button onClick={handleCreateRoom} disabled={isCreating}>
      {isCreating ? 'Creating...' : 'Create Room'}
    </Button>
  );
}
