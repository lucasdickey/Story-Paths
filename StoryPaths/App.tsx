import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import styles from './components/Styles';
import Form from './components/InputForm';
import StoryDisplay from './components/StoryDisplay';

const App = () => {

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          <p>testing stuff</p>
          <InputForm />
          <StoryDisplay />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
