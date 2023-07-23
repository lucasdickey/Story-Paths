import { HttpService } from "@services/HttpService";
import Config from "react-native-config";

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

interface ChatCompletionRequest {
  prompt: string;
}

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
    { 'Authorization': `Bearer ${API_KEY}` }
  );
  
  return response;
}

const createChatCompletion = async (request: ChatCompletionRequest) => {
  // TODO: Implement this, as completions endpoint will be deprecated in 2024
  return null;
}

const createImage = async (request: ImageRequest) => {
  const response = HttpService.post(
    `${BASE_URL}/images/generations`,
    request,
    { 'Authorization': `Bearer ${API_KEY}` }
  );

  return response;
}

export const OpenAiService = {
  createCompletion: createCompletion,
  createChatCompletion: createChatCompletion,
  createImage: createImage,
}
