import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RotatingStoryPathsIcon } from '@components/icons/StoryPathsIcon';
import { StoryGeneratorService } from '@services/StoryGeneratorService';
import type { StackScreenProps } from '@navigation/StackNavigator';
import type { StoryPromptParams } from '@services/StoryGeneratorService';

export type LoadingStoryRouteParams = StoryPromptParams;

export default function LoadingStoryScreen({
  navigation,
  route,
}: StackScreenProps<'LoadingStory'>): JSX.Element {
  const { name, villain, location, age, voice } = route.params;

  useEffect(() => {
    StoryGeneratorService.createStory({
      name: name,
      villain: villain,
      location: location,
      age: age,
      voice: voice,
    })
      .then(generatedStory => {
        navigation.replace('GeneratedStory', generatedStory);
      })
      .catch(error => {
        console.error('Error', error);
      });
  }, [name, villain, location, age, voice, navigation]);

  return (
    <View style={styles.container}>
      <RotatingStoryPathsIcon />
      <View style={styles.textContainer}>
        <Text>Loading Story</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
  },
});
