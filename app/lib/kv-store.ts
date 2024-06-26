"use server";

import { kv } from "@vercel/kv";

export type Room = {
  id: string;
  name: string;
  color: string;
  messages: string[];
};

export async function createRoom(name: string, color: string): Promise<Room> {
  const id = Math.random().toString(36).substring(2, 6);
  const room: Room = { id, name, color, messages: [] };

  await kv.set(`room:${id}`, JSON.stringify(room));
  await kv.sadd("rooms", id);

  return room;
}

export async function getRoom(id: string): Promise<Room | null> {
  const roomData = await kv.get(`room:${id}`);
  if (!roomData) return null;

  if (typeof roomData === "string") {
    try {
      return JSON.parse(roomData) as Room;
    } catch {
      return null;
    }
  }

  return roomData as Room;
}

export async function getAllRoomIds(): Promise<string[]> {
  return kv.smembers("rooms");
}

export async function addMessageToRoom(
  roomId: string,
  message: string
): Promise<void> {
  await kv.lpush(`room:${roomId}:messages`, message);
}

export async function getRoomMessages(
  roomId: string,
  limit: number = 50
): Promise<string[]> {
  return kv.lrange(`room:${roomId}:messages`, 0, limit - 1);
}

export async function updateRoom(room: Room): Promise<void> {
  await kv.set(`room:${room.id}`, JSON.stringify(room));
}
