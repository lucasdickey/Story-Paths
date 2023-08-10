import React from 'react';
import * as Screens from '@screens';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import type { StackScreenProps } from '@navigation/StackNavigator';

type Screen = React.FunctionComponent<any> & {
  options:
    | NativeStackNavigationOptions
    | (({
        navigation,
        route,
      }: StackScreenProps<any>) => NativeStackNavigationOptions);
};

type ScreenMap = {
  [screen: string]: Screen;
};

const convertScreenName = (screenName: string) => {
  return screenName.slice(0, -6);
};

const ScreenMapping = Object.keys(Screens).reduce(
  (acc: ScreenMap, key: string) => {
    return {
      ...acc,
      [convertScreenName(key)]: Screens[key as keyof typeof Screens],
    };
  },
  {},
);

export default ScreenMapping;
