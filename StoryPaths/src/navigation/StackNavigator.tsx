import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenMapping from '@screens/ScreenMapping';
import RoutingConfig from "@config/data/routes";

const Stack = createNativeStackNavigator();

const stackScreen = (screenName: string) => {
  return (
    <Stack.Screen
      key={screenName}
      name={screenName}
      component={ScreenMapping[screenName]}
      options={RoutingConfig.routes[screenName].options}
    />
  );
};

export default function StackNavigator(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName={RoutingConfig.initialRouteName} screenOptions={RoutingConfig.screenOptions}>
      {Object.keys(RoutingConfig.routes).map(stackScreen)}
    </Stack.Navigator>
  );
}
