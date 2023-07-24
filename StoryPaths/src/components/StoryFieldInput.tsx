import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface StoryFieldInputProps {
  label: string;
  caption: string;
  placeholder: string;
  value?: string;
  onChangeText?: ((text: string) => void);
};

const StoryFieldInput = (props: StoryFieldInputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput placeholder={props.placeholder} style={styles.input} />
      <Text style={styles.caption}>{props.caption} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    paddingBottom: 10,
  },
  input: {
    borderWidth: 1,
    height: 40,
    padding: 10,
    marginBottom: 12,
  },
  caption: {
    fontSize: 12,
    color: '#333333',
  },
  container: {
    padding: 5,
  }
});

export default StoryFieldInput;
