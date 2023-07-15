import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

interface StoryFieldInputProps extends TextInputProps {
  label: string;
  caption: string;
};

const StoryFieldInput = (props: StoryFieldInputProps) => {
  return (
    <>
      <Text>{props.label}</Text>
      <TextInput {...props} style={styles.input} />
      <Text style={styles.caption}>{props.caption} </Text>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  caption: {
    paddingBottom: 15,
    paddingLeft: 15,
  },
});

export default StoryFieldInput;
