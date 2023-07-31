import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenMapping from 'screens/ScreenMapping';
import RoutingConfig from 'config/data/routes';
import type { RouteParamList } from 'config/data/route-params';

export type StackParamList = RouteParamList;

const Stack = createNativeStackNavigator<StackParamList>();

const stackScreen = (screenName: string) => {
  return (
    <Stack.Screen
      key={screenName}
      name={screenName as keyof StackParamList}
      component={ScreenMapping[screenName]}
      options={RoutingConfig.routes[screenName as keyof StackParamList].options}
    />
  );
};

export default function StackNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName={RoutingConfig.initialRouteName}
      screenOptions={RoutingConfig.screenOptions}>
      {Object.keys(RoutingConfig.routes).map(stackScreen)}
    </Stack.Navigator>
  );
}
