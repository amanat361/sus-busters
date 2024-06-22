import { Heading } from "@/components/primitives/heading";
import RoomList from "./roomList";

export default function Room() {
  return (
    <div>
      <Heading>Rooms</Heading>
      <RoomList />
    </div>
  );
}