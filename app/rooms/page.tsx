import CreateRoom from "@/components/createRoom";
import {nanoid} from "nanoid";

export default function Room() {
  const mockRooms = [
    {
      id: nanoid(),
      name: "Room 1",
      description: "This is a room description",
      members: ["user1", "user2", "user3"],
    },
    {
      id: nanoid(),
      name: "Room 2",
      description: "This is a room description",
      members: ["user1", "user2", "user3"],
    },
    {
      id: nanoid(),
      name: "Room 3",
      description: "This is a room description",
      members: ["user1", "user2", "user3"],
    },
  ];

  return (
    <div>
      <h1>Rooms</h1>
      <ul>
        {mockRooms.map((room) => (
          <li key={room.id}>
            <a href={`/room/${room.id}`}>{room.name}</a>
          </li>
        ))}
      </ul>
      <CreateRoom />
    </div>
  );
}