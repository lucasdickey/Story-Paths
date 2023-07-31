import { HttpService } from 'services/HttpService';
import Config from 'react-native-config';

const API_KEY = Config.OPEN_AI_API_KEY;
const BASE_URL = 'https://api.openai.com/v1';

interface CompletionRequest {
  model: string;
  prompt: string;
  max_tokens?: number;
  temperature?: number;
  top_p?: number;
  n?: number;
  stream?: boolean;
  logprobs?: number;
  echo?: boolean;
  stop?: string | string[] | null;
}

/*
interface ChatCompletionRequest {
  prompt: string;
}
*/

interface ImageRequest {
  prompt: string;
  n?: number;
  size?: string;
  response_format?: string;
  user?: string;
}

interface TextCompletion {
  choices: Choice[];
}
interface Choice {
  text: string;
}

const createCompletion = async (request: CompletionRequest) => {
  const response: TextCompletion = await HttpService.post(
    `${BASE_URL}/completions`,
    request,
    { Authorization: `Bearer ${API_KEY}` },
  );

  return response;
};

/* const createChatCompletion = async (request: ChatCompletionRequest) => {
  // TODO: Implement this, as completions endpoint will be deprecated in 2024
  return null;
};
*/

const createImage = async (request: ImageRequest) => {
  const response = HttpService.post(`${BASE_URL}/images/generations`, request, {
    Authorization: `Bearer ${API_KEY}`,
  });

  return response;
};

export const OpenAiService = {
  createCompletion: createCompletion,
  createImage: createImage,
};

/*
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
  prompt: "A cute baby sea otter",
  n: 2,
  size: "1024x1024",
});
// The prompt above will be a combinatin of inputs from the story generation fields
// Ideally we could one-up the resuse of simple strings, but instead pull in the output from
// the generated story itself, and one paragraph at a time feed those into DALL-E2 to generate
// one time contemporaneious -- in the story -- inmage for each paragraph.
*/
