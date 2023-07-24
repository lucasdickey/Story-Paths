import React from 'react';
import { StyleSheet, Pressable, Text, PressableStateCallbackType, PressableProps, View } from 'react-native';

interface StoryButtonProps {
  title: string;
}

const StoryButton = (props: StoryButtonProps) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <Pressable style={pressStyle}>
        <Text style={styles.text}>{props.title}</Text>
      </Pressable>
    </View>
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
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: '80%',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default StoryButton;
