import { PlusCircleIcon } from "@heroicons/react/16/solid";
import { Button } from "./primitives/button";
import { nanoid } from "nanoid";

export default function CreateRoom() {
  const roomId = nanoid();

  return (
    <Button href={`/room/${roomId}`}>
      Create Room
      <PlusCircleIcon />
    </Button>
  );
}
