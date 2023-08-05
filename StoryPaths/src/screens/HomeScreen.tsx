import React from 'react';
import { ScrollView, View } from 'react-native';
import StoryForm from '@components/StoryForm';
import type { StackScreenProps } from '@navigation/StackNavigator';

export type HomeRouteParams = undefined;

export default function HomeScreen({}: StackScreenProps<'Home'>): JSX.Element {
  return (
    <View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <StoryForm />
      </ScrollView>
    </View>
  );
}
