import { Heading } from "@/components/primitives/heading";
import RoomList from "./roomList";

export default function Room() {
  return (
    <div className="flex flex-col gap-4">
      <Heading>Rooms</Heading>
      <RoomList />
    </div>
  );
}