/*
REQUIRED: 1. Load contents of generated story
REQUIRED: 2. Make sure to pull out story title using regex on [title] (wrapped in brackets) and place above rest of story
REQUIRED: 3. Title and story will be styled differently (Lucas can style it)
REQUIRED: 4. Back button to generate new story (whether generated dynamically by library or manually created)

--

Immediate next features:
1. Use DALL-E to generate title image for story (to precede story name)
2. Leverage DALL-E API to generate images for story and intersperse them throughout the story

--

Future future features:
1. Share story button
2. Save story button (Save story to database)
3. Retrieve older saved stories from a list
4. Delete saved stories from a list
5. Edit saved stories
6. Print story as a book using Amazong self-serve or similar
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { StackScreenProps } from '@navigation/types';
import type { StoryResponse } from '@services/StoryGeneratorService';

export type GeneratedStoryRouteParams = StoryResponse;

GeneratedStoryScreen.options = ({
  route,
}: StackScreenProps<'GeneratedStory'>) => ({
  title: route.params.title,
});

function paragraph(text: string, index: number) {
  return (
    <Text key={index} style={styles.paragraphContainer}>
      {text}
    </Text>
  );
}

export default function GeneratedStoryScreen({
  route,
}: StackScreenProps<'GeneratedStory'>): JSX.Element {
  const { story } = route.params;

  return <View>{story.map((text, index) => paragraph(text, index))}</View>;
}

const styles = StyleSheet.create({
  paragraphContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});
