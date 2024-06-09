import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: "4c69d981e76a4796af0ef73591fb5de7",
  baseURL: "https://api.aimlapi.com",
  dangerouslyAllowBrowser: true,
});

export const callAi = async (domain: string, level: string, time: string, techStack: string):Promise<string> => {
  const chatCompletion = await openai.chat.completions.create({
    model: "mistralai/Mistral-7B-Instruct-v0.2",
    messages: [
      { role: "system", content: "You are a helpful assistant" },
      { role: "user", content: `Give a 5 list of real world problems for hackathon(junior level) , my domain is ${domain}, my level of expertise is ${level}, and the time allocated for the hackathon is ${time} hours,btw my techStack is ${techStack}.`}
    ],
    temperature: 0.7,
    max_tokens: 128,
  });
  const response  = "AI/ML API:\n"+ chatCompletion.choices[0].message.content;

  return response;
};