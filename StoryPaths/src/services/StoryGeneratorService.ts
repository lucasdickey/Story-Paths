import { OpenAiService } from "services/OpenAiService";

const STORY_GENERATOR_MODEL = 'text-davinci-003';
const STORY_GENERATOR_MAX_TOKENS = 1024;
const STORY_GENERATOR_TEMPERATURE = 0.3;
const STORY_GENERATOR_N = 1;

interface StoryPrompt {
  name: string;
  villain: string;
  sidekick: string;
  location: string;
  age: string;
  voice: string;
  theme: string;
}

function generatePrompt({ name, villain, sidekick, location, age, voice, theme }: StoryPrompt) {
  return `
    Create a children's story with the following elements: 
    1) a hero named ${name},
    2) a villain who is a ${villain},
    3) a sidekick named ${sidekick},
    4) set in a ${location} location/setting,
    5) suitable for a child of ${age} years old,
    6) in the voice of ${voice}, and 
    7) with the theme of ${theme}.
  `;
}

const createStory = async (prompt: StoryPrompt) => {
  const response = await OpenAiService.createCompletion({
    model: STORY_GENERATOR_MODEL,
    prompt: generatePrompt(prompt),
    max_tokens: STORY_GENERATOR_MAX_TOKENS,
    temperature: STORY_GENERATOR_TEMPERATURE,
    n: STORY_GENERATOR_N,
  });
  
  return response.choices[0].text;
}

export const StoryGeneratorService = {
  createStory: createStory,
}
