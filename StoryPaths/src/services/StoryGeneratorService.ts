import { OpenAiService } from '@services/OpenAiService';

const STORY_GENERATOR_MODEL = 'text-davinci-003';
const STORY_GENERATOR_MAX_TOKENS = 1024;
const STORY_GENERATOR_TEMPERATURE = 0.3;
const STORY_GENERATOR_N = 1;

export type StoryPromptParams = {
  name: string;
  villain: string;
  location: string;
  age: string;
  voice: string;
};

export type StoryResponse = {
  title: string;
  story: string[];
};

function generatePrompt({
  name,
  villain,
  location,
  age,
  voice,
}: StoryPromptParams) {
  return `
    Create a children's story with the following elements:
    1) a hero named ${name},
    2) a villain who is a ${villain},
    3) set in a ${location} location/setting,
    4) suitable for a child of ${age} years old, and
    5) in the voice of ${voice}. Please do not reference the original "in the voice of author" either on outupt.

    The output should be in JSON format, with the following fields:
    1) title,
    2) story

    The story should be an array of paragraphs, with each paragraph being a string.
  `;
}

const parseResponse = (response: string) => {
  const filteredResponse = response.replaceAll(/[\u0000-\u001f]*/gi, ''); // eslint-disable-line no-control-regex
  const story: StoryResponse = JSON.parse(filteredResponse);

  return story;
};

const createStory = async (prompt: StoryPromptParams) => {
  const response = await OpenAiService.createCompletion({
    model: STORY_GENERATOR_MODEL,
    prompt: generatePrompt(prompt),
    max_tokens: STORY_GENERATOR_MAX_TOKENS,
    temperature: STORY_GENERATOR_TEMPERATURE,
    n: STORY_GENERATOR_N,
  });

  return parseResponse(response.choices[0].text);
};

export const StoryGeneratorService = {
  createStory: createStory,
};
