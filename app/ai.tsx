"use server";

import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { z } from "zod";

export async function getRoomName() {
  const { object } = await generateObject({
    model: openai("gpt-4o"),
    schema: z.object({
      name: z.string().min(10).max(30).toLowerCase(),
    }),
    prompt: "Create a unique room name identifier that can be one or more words. They should be funny and easy to remember. They will be to identify rooms that users can select and join. It can be up to 30 characters so feel free to come up with some unique room names. The users of this programs are adults and this is a game so they can be a bit more adult oriented.", 
  });

  return object.name;
}