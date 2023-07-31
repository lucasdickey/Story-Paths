import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import StoryFieldInput, {
  StoryFieldInputProps,
} from 'components/StoryFieldInput';
import StoryButton from 'components/StoryButton';
import type { StoryPromptParams } from 'services/StoryGeneratorService';
import { useNavigation } from 'navigation/StackNavigator';

type StoryFormInputs = {
  [Property in keyof StoryPromptParams]: string | undefined;
};

type FormProps = {
  [Property in keyof StoryPromptParams]: StoryFieldInputProps;
};

const inputOrder: (keyof StoryFormInputs)[] = [
  'name',
  'villain',
  'age',
  'location',
  'voice',
];

const inputFieldsText: FormProps = {
  name: {
    label: "Child's name",
    caption: 'The hero of the story',
    placeholder: "Enter your child's name",
  },
  villain: {
    label: 'The villain',
    caption: 'Dragon, robot, vampire—oh my!',
    placeholder: 'Enter a type of villain',
  },
  age: {
    label: "Child's age",
    caption: 'Sets age appropriateness of story content',
    placeholder: '5',
  },
  location: {
    label: 'Story setting',
    caption: 'Where the story takes place',
    placeholder: "Enter the story's setting",
  },
  voice: {
    label: 'Author inspiration',
    caption: 'Inspirational voice for this story',
    placeholder: 'Pick an inspirational author',
  },
};

const inputField = (
  field: keyof StoryPromptParams,
  value: string | undefined,
  update: (field: string, value: string) => void,
) => {
  const { label, caption, placeholder } = inputFieldsText[field];

  const onChangeText = (text: string) => {
    update(field, text);
  };

  return (
    <StoryFieldInput
      key={field}
      label={label}
      caption={caption}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default function StoryForm() {
  const navigation = useNavigation();

  const [promptParams, setPromptParams] = useState<StoryFormInputs>({
    name: undefined,
    villain: undefined,
    location: undefined,
    age: undefined,
    voice: undefined,
  });

  const updateForm = (field: string, value: string) => {
    setPromptParams({ ...promptParams, [field]: value });
  };

  const validateForm = () => {
    return Object.values(promptParams).every(value => value !== undefined);
  };

  const submitForm = () => {
    if (!validateForm()) {
      return;
    }
    navigation.navigate('LoadingStory', promptParams as StoryPromptParams);
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        {inputOrder.map(field =>
          inputField(field, promptParams[field], updateForm),
        )}
      </View>
      <StoryButton title="Create your story" onPress={submitForm} />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
});
