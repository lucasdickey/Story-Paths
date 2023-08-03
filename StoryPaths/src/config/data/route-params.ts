import type { StoryPromptParams } from '@services/StoryGeneratorService';

export type RouteParamList = {
  Home: undefined;
  LoadingStory: StoryPromptParams;
  GeneratedStory: { story: string };
};
