import { Heading } from "@/components/primitives/heading";

export default function Room({params}: {params: {id: string}}) {
  return (
    <div>
      <Heading>Room {params.id}</Heading>
    </div>
  );
}