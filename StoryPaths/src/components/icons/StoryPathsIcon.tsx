import React from 'react';
import { Animated, Easing, Image, StyleSheet } from 'react-native';
import { StoryPathLogo } from '@assets/images';

const StoryPathsIcon = () => {
  return <Image source={StoryPathLogo} style={styles.iconContainer} />;
};

export const RotatingStoryPathsIcon = () => {
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 360,
      duration: 1200,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  return (
    <Animated.View
      style={[
        styles.animatedContainer,
        {
          transform: [
            {
              rotate: spinValue.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        },
      ]}>
      <StoryPathsIcon />
    </Animated.View>
  );
};

export default StoryPathsIcon;

const styles = StyleSheet.create({
  iconContainer: {
    width: '75%',
    height: '75%',
  },
  animatedContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
