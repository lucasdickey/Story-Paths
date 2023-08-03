import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RoutingConfig from '@config/data/routes';
import { useNavigation as useNav } from '@react-navigation/native';
import ScreenMapping from '@navigation/ScreenMapping';
import type { RouteParamList } from '@config/data/route-params';
import type {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

export type StackScreenProps<T extends keyof RouteParamList> =
  NativeStackScreenProps<RouteParamList, T>;

export function useNavigation() {
  return useNav<NativeStackNavigationProp<RouteParamList>>();
}

const Stack = createNativeStackNavigator<RouteParamList>();

const stackScreen = (screenName: string) => {
  return (
    <Stack.Screen
      key={screenName}
      name={screenName as keyof RouteParamList}
      component={ScreenMapping[screenName]}
      options={RoutingConfig.routes[screenName as keyof RouteParamList].options}
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
