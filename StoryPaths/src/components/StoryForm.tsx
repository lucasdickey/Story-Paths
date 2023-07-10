import React from 'react';
import { View } from 'react-native';
import StoryFieldInput from './StoryFieldInput';
import StoryButton from './StoryButton';

const StoryForm = () => {
  return (
    <View>
      <StoryFieldInput label='Label1' caption='Caption1' placeholder='placeholder1'></StoryFieldInput>
      <StoryFieldInput label='Label2' caption='Caption2' placeholder='placeholder2'></StoryFieldInput>
      <StoryFieldInput label='Label3' caption='Caption3' placeholder='placeholder3'></StoryFieldInput>
      <StoryFieldInput label='Label4' caption='Caption4' placeholder='placeholder4'></StoryFieldInput>
      <StoryButton title={'1'}/>
    </View>
  );
};

export default StoryForm;
