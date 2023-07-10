import React from 'react';
import { StyleSheet, Pressable, Text, PressableStateCallbackType, PressableProps } from 'react-native';

interface StoryButtonProps extends PressableProps {
  title: string;
}

const StoryButton = (props: StoryButtonProps) => {
  return (
    <Pressable style={pressStyle} {...props}>
      <Text>{props.title}</Text>
    </Pressable>
  );
};

const pressStyle = ({pressed}: PressableStateCallbackType) => [
  {
    backgroundColor: pressed ? 'rgb(75, 94, 241)' : 'rgb(122, 136, 245)',
  },
  styles.button,
]

const styles = StyleSheet.create({
  button: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default StoryButton;
