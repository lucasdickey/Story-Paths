import StoryForm from 'components/StoryForm';
import React from 'react';
import { ScrollView, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { StackParamList } from 'navigation/StackNavigator';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

export default function HomeScreen({}: Props): JSX.Element {
  return (
    <View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <StoryForm />
      </ScrollView>
    </View>
  );
}
