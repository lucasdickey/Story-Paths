import React from 'react';
import * as Screens from '@screens';

type ScreenMap = {
  [screen: string]: React.FunctionComponent<any>;
};

const convertScreenName = (screenName: string) => {
  return screenName.slice(0, -6);
};

const ScreenMapping = Object.keys(Screens as ScreenMap).reduce(
  (acc: ScreenMap, key: string) => {
    return {
      ...acc,
      [convertScreenName(key)]: Screens[key as keyof typeof Screens],
    };
  },
  {},
);

export default ScreenMapping;
