import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { StoryGeneratorService } from '@services/StoryGeneratorService';
import type { StackScreenProps } from '@navigation/StackNavigator';

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
        navigation.replace('GeneratedStory', { story: generatedStory });
      })
      .catch(error => {
        console.error('Error', error);
      });
  }, [name, villain, location, age, voice, navigation]);

  return (
    <View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Loading Story</Text>
      </ScrollView>
    </View>
  );
}
