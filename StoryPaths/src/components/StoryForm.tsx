import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StoryFieldInput from './StoryFieldInput';
import StoryButton from './StoryButton';

const StoryForm = () => {
  return (
    <View style={styles.formContainer}>
    <View>
      <StoryFieldInput style={styles.StoryFieldInput}
        label={<Text style={styles.label}>{"Child's name"}</Text>}
        caption={<Text style={styles.caption}>{"The hero of the story"}</Text>}
        placeholder={"Enter your child's name"}
      />     
      <StoryFieldInput style={styles.StoryFieldInput}
        label={<Text style={styles.label}>{"The villain"}</Text>}
        caption={<Text style={styles.caption}>{"Dragon, robot, vampire—oh my!"}</Text>}
        placeholder='Enter a type of villain'
      />
      <StoryFieldInput style={styles.StoryFieldInput}
        label={<Text style={styles.label}>{"Child's age"}</Text>}
        caption={<Text style={styles.caption}>{"Sets age appropriateness of story content"}</Text>}
        placeholder='5'
      />
      <StoryFieldInput style={styles.StoryFieldInput}
        label={<Text style={styles.label}>{"Story setting"}</Text>}
        caption={<Text style={styles.caption}>{"Where the story takes place"}</Text>}
        placeholder={"Enter the story's setting"}
      />
      <StoryFieldInput style={styles.StoryFieldInput}
        label={<Text style={styles.label}>{"Author inspiration"}</Text>}
        caption={<Text style={styles.caption}>{"Inspirational voice for this story"}</Text>}
        placeholder='Pick an inspirational author'
      />
      <View style={styles.buttoncontainer}>
        <StoryButton style={styles.StoryButton}
          title={<Text style={styles.title}>{'Create your story'}</Text>}
        />
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    marginLeft: 15,
    marginBottom: 15,
    paddingTop: 15,
    marginTop: 15,
  },
  caption: {
    fontSize: 12,
    color: '#333333',
    marginBottom: 150, // need to figure out how to get padding working right to create space between each of the fields. is it another view?
    paddingBottom: 150, // need to figure out how to get padding working right to create space between each of the fields is it another view?
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    margin: 15,
  },
  StoryButton: {
    backgroundColor: '#7D88EE',
    borderRadius: 5,
    width: '80%',
    height: 50,
    marginTop: 10,
    marginBottom: 15,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  StoryFieldInput: {
    padding: 20,
    margin: 20,
  },
  buttoncontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    paddingTop: 15,
  },
  formContainer: {
    paddingLeft: 10,
    marginLeft: 10,
    paddingRight: 10,
    marginRight: 10,
    marginTop: 10,
    paddingTop: 10,
  },
});

export default StoryForm;
