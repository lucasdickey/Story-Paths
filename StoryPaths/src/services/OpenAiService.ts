import { HttpService } from "@services/HttpService";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_BASE_URL = 'https://api.openai.com/v1';

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

function createCompletion(request: CompletionRequest) {
  return HttpService.post(
    `${OPENAI_API_BASE_URL}/completions`,
    request,
    { 'Authorization': `Bearer ${OPENAI_API_KEY}` }
  );
}

function createChatCompletion(){
  // TODO: Implement this, as completions endpoint will be deprecated in 2024
  return null;
}

function createImage(request: ImageRequest){
  return HttpService.post(
    `${OPENAI_API_BASE_URL}/images`,
    request,
    { 'Authorization': `Bearer ${OPENAI_API_KEY}` }
  );
}

export const OpenAiService = {
  createCompletion: createCompletion,
}
