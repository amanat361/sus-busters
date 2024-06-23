import CreateRoomButton from "@/components/createRoom";
import { Button } from "@/components/primitives/button";
import { Heading } from "@/components/primitives/heading";
import { EyeIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Heading>Sus Busters...Cumming soon...</Heading>
      <div className="flex items-center gap-4">
        <Button href="/rooms">
          View Rooms
          <EyeIcon />
        </Button>
      </div>
    </div>
  );
}
