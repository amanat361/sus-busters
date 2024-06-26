"use client"

import { useState, useEffect } from 'react';
import { Text } from '@/components/primitives/text';
import RoomCard from './roomCard';
import CreateRoomButton from './createRoom';
import { getAllRoomIds, getRoom, Room } from '@/app/lib/kv-store';

export default function RoomList() {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const roomIds = await getAllRoomIds();
      const roomsData = await Promise.all(roomIds.map(id => getRoom(id)));
      setRooms(roomsData.filter((room): room is Room => room !== null));
    };
    fetchRooms();
  }, []);

  const handleCreateRoom = (newRoom: Room) => {
    setRooms(prevRooms => [...prevRooms, newRoom]);
  };

  return (
    <div className="flex flex-col gap-4">
      {rooms.length === 0 && <Text>No rooms yet</Text>}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {rooms.map((room) => (
          <RoomCard key={room.id} {...room} />
        ))}
      </div>
      <CreateRoomButton currentRooms={rooms} onCreateRoom={handleCreateRoom} />
    </div>
  );
}import { map } from 'zod';

