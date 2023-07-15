import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StoryFieldInput from './StoryFieldInput';
import StoryButton from './StoryButton';

const StoryForm = () => {
  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <StoryFieldInput
          label="Child's name"
          caption="The hero of the story"
          placeholder="Enter your child's name"
        />
        <StoryFieldInput
          label="The villain"
          caption="Dragon, robot, vampire—oh my!"
          placeholder='Enter a type of villain'
        />
        <StoryFieldInput
          label="Child's age"
          caption="Sets age appropriateness of story content"
          placeholder='5'
        />
        <StoryFieldInput
          label="Story setting"
          caption="Where the story takes place"
          placeholder="Enter the story's setting"
        />
        <StoryFieldInput
          label="Author inspiration"
          caption="Inspirational voice for this story"
          placeholder='Pick an inspirational author'
        />
      </View>
      <StoryButton title='Create your story' />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
});

export default StoryForm;
