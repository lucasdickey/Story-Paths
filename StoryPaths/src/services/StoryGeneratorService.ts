import { OpenAIService } from "@services/OpenAIService";

const STORY_GENERATOR_MODEL = 'text-davinci-003';
const STORY_GENERATOR_MAX_TOKENS = 1024;
const STORY_GENERATOR_TEMPERATURE = 0.3;
const STORY_GENERATOR_N = 1;

function createStory(prompt: string) {
  return OpenAIService.createCompletion({
    model: STORY_GENERATOR_MODEL,
    prompt: prompt,
    max_tokens: STORY_GENERATOR_MAX_TOKENS,
    temperature: STORY_GENERATOR_TEMPERATURE,
    n: STORY_GENERATOR_N,
  }).then((response: any) => {
    return response.choices[0].text;
  })
}

export const StoryGeneratorService = {
  createStory: createStory,
}
