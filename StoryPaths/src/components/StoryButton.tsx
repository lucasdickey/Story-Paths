import React from 'react';
import {
  StyleSheet,
  Pressable,
  Text,
  PressableStateCallbackType,
  View,
} from 'react-native';

interface StoryButtonProps {
  title: string;
  onPress?: () => void;
}

const StoryButton = (props: StoryButtonProps) => {
  return (
    <View style={styles.container}>
      <Pressable style={pressStyle} onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

const pressStyle = ({ pressed }: PressableStateCallbackType) => [
  {
    backgroundColor: pressed ? 'rgb(75, 94, 241)' : 'rgb(122, 136, 245)',
  },
  styles.button,
];

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
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
