/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import StoryForm from '@components/StoryForm';
import React, { useState, useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { StoryGeneratorService } from '@services/StoryGeneratorService';

export default function HomeScreen(): JSX.Element {
  const [story, setStory] = useState<string>("");

  useEffect(() => {
    StoryGeneratorService.createStory({
      name: "John",
      villain: "Adam",
      sidekick: "Joey",
      location: "Mars",
      age: "5",
      voice: "Dr. Seuss",
      theme: "love",
    }).then((story) => {
      console.log(story);
      setStory(story);
    }).catch((error) => {
      console.log("Error", error);
    });
  }, []);

  return (
    <View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>
          {story}
        </Text>
        <StoryForm></StoryForm>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
