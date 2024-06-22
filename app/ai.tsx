"use server";

import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { z } from "zod";
import { Room } from "./rooms/roomList";

export async function getRoomName(currentRooms: Room[]) {
  const { object } = await generateObject({
    model: openai("gpt-4o"),
    schema: z.object({
      name: z
        .string()
        .min(10)
        .max(30)
        .refine(
          (name) => !currentRooms.some((room) => room.name === name),
          "This room name is already taken"
        ),
    }),
    prompt: `Create a unique room name identifier that can be one or more words.
             The string does not have to be all one thing, it can have capitalization, spaces, and such since this is just a label, not the actual id for the room.
             They should be funny and easy to remember. They will be to identify rooms that users can select and join. It can be up to 30 characters so feel free to come up with some unique room names.
             The users of this programs are adults and this is a game so they can be a bit more adult oriented. By that I mean that they can be a bit more sexually explicit and suggestive but not necessarily.
             We also like silly and cute things. The name of the room should be surprising and make you want to join it. Don't be afraid to be a bit silly with the name.
             It would also be nice if the rooms were in alphabetical order, using the existing room names as a reference for which letter the next name should start with.
             Just remember that the names have a limit of 30 characters so you can't go over that. The minimum length is 10 characters and the maximum is 30. Two words is ideal but not required.
             Here is the current list of rooms so you can ensure that the new room is unique and does not use the same words as the existing rooms: ${JSON.stringify(
               currentRooms
             )}.`,
    temperature: 1,
  });

  return object.name;
}

export async function getRoomQuestions() {
  const { object } = await generateObject({
    model: openai("gpt-4o"),
    schema: z.object({
      questions: z
        .array(z.string())
        .length(10)
        .refine(
          (questions) => questions.every((question) => question.length > 0),
          "All questions must be at least one character long"
        ),
    }),
    prompt: `Create a list of 10 questions that can be asked to a user to determine if they are a human or a bot.
             The questions should be in the form of a list of strings. Each question should be at least one character long.
             The questions should be as unique as possible. The questions should be as fun and interesting as possible.
             The users are adults and this is a game so they can be a bit more adult oriented. By that I mean that they can be a bit more sexually explicit and suggestive but not necessarily.
             We also like silly and cute things. The questions should be surprising and make you want to join it. Don't be afraid to be a bit silly with the questions.`,
    temperature: 1,
  });

  return object.questions;
}
