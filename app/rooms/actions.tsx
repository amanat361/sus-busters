"use server";

import { kv } from "@vercel/kv";
import { z } from "zod";
import { getRoomName } from "../ai";
import { Room } from "./roomList";

function randomHexColor() {
  return `#${Math.random().toString(16).substring(2, 6)}`;
}

export async function createRoom(currentRooms: Room[]) {
  const roomName = await getRoomName(currentRooms);
  const roomId = Math.random().toString(36).substring(2, 6);
  const roomQuestions = [] as string[];
  const roomColor = randomHexColor();
  kv.sadd(`rooms`, roomId);
  await kv.hset(`room:${roomId}`, {
    id: roomId,
    name: roomName,
    questions: roomQuestions,
    color: roomColor,
  });
  return {
    id: roomId,
    name: roomName,
    questions: roomQuestions,
    color: roomColor,
  } as Room;
}