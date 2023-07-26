/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import StoryForm from '@components/StoryForm';
import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { StoryGeneratorService } from '@services/StoryGeneratorService';

export default function HomeScreen(): JSX.Element {
  const [story, setStory] = useState<string>('');

  useEffect(() => {
    StoryGeneratorService.createStory({
      name: 'John',
      villain: 'Adam',
      sidekick: 'Joey',
      location: 'Mars',
      age: '5',
      voice: 'Dr. Seuss',
      theme: 'love',
    })
      .then(generatedStory => {
        console.log(generatedStory);
        setStory(generatedStory);
      })
      .catch(error => {
        console.log('Error', error);
      });
  }, []);

  return (
    <View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>{story}</Text>
        <StoryForm />
      </ScrollView>
    </View>
  );
}
