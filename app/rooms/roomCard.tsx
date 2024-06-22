import Link from "next/link";
import type { Room } from "./roomList";

export default function RoomCard({ id, name }: Room) {
  return (
    <Link className="flex items-center gap-4 border-2 border-zinc-950/5 p-4 rounded-lg hover:bg-zinc-950/5 dark:hover:bg-white/5 transition-colors" href={`/rooms/${id}`}>
      <div className="w-16 h-16 rounded-full bg-zinc-500/10 dark:bg-white/5"></div>
      <div>
        <div className="text-lg font-medium text-zinc-950 dark:text-white">{name}</div>
        <div className="text-sm text-zinc-500 dark:text-zinc-400">ID: {id}</div>
      </div>
    </Link>
  );
}