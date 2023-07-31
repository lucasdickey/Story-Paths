import StoryForm from 'components/StoryForm';
import React from 'react';
import { ScrollView, View } from 'react-native';
import type { StackScreenProps } from 'navigation/StackNavigator';

type Props = StackScreenProps<'Home'>;

export default function HomeScreen({}: Props): JSX.Element {
  return (
    <View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <StoryForm />
      </ScrollView>
    </View>
  );
}
