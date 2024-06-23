import { getRoomQuestions } from "@/app/ai";
import { Heading } from "@/components/primitives/heading";

export const dynamic = "force-dynamic";

export default async function Room({params}: {params: {id: string}}) {
  const questions = await getRoomQuestions();

  return (
    <div>
      <Heading>Room {params.id}</Heading>
      <div className="flex flex-col gap-4">
        {questions.map((question) => (
          <div key={question}>{question}</div>
        ))}
      </div>
    </div>
  );
}