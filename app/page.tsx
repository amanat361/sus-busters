import CreateRoom from "@/components/createRoom";
import { Button } from "@/components/primitives/button";
import { Heading } from "@/components/primitives/heading";
import { EyeIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <Heading>Sus Busters...Cumming soon...</Heading>
      <div className="flex items-center gap-4">
        <Button href="/rooms">
          View Rooms
          <EyeIcon />
        </Button>
        <CreateRoom />
      </div>
    </main>
  );
}
