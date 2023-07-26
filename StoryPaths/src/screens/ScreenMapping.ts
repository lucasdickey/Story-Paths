import * as React from 'react';
// @ts-ignore
import * as Screens from './{**/*.tsx,*.tsx}';

type ScreenMap = {
  [screen: string]: React.FunctionComponent;
};

const convertScreenName = (screenName: string) => {
  return screenName.slice(0, -6);
};

const ScreenMapping = Object.keys(Screens).reduce(
  (acc: ScreenMap, key: string) => {
    return { ...acc, [convertScreenName(key)]: Screens[key] };
  },
  {},
);

export default ScreenMapping;
