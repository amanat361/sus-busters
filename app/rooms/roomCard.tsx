import Link from "next/link";
import type { Room } from "@/app/lib/kv-store";

export default function RoomCard({ id, color, name }: Room) {
  return (
    <Link href={`/rooms/${id}`} className="flex items-center gap-4 border-2 border-zinc-950/5 p-4 rounded-lg hover:bg-zinc-950/5 dark:hover:bg-white/5 transition-colors">
      <svg
        className="w-16 h-16 rounded-full"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill={color} />
      </svg>
      <div>
        <div className="text-lg font-medium text-zinc-950 dark:text-white">{name}</div>
        <div className="text-sm text-zinc-500 dark:text-zinc-400">ID: {id}</div>
      </div>
    </Link>
  );
}