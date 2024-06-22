import Link from "next/link";

export default function RoomCard({ id, name }: { id: string; name: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-full bg-zinc-500/10 dark:bg-white/5"></div>
      <div>
        <div className="text-lg font-medium text-zinc-950 dark:text-white">{name}</div>
        <div className="text-sm text-zinc-500 dark:text-zinc-400">{id}</div>
      </div>
      <Link href={`/rooms/${id}`}>Go to room</Link>
    </div>
  );
}