import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Generate a random English sentence.",
      max_tokens: 50,
    });
    res.status(200).json({ sentence: response.data.choices[0].text.trim() });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate text" });
  }
}
