import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation as useNav } from '@react-navigation/native';
import ScreenMapping from '@navigation/ScreenMapping';
import type { RouteParamList } from '@navigation/types';
import type {
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

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
      options={ScreenMapping[screenName].options}
    />
  );
};

const screenOptions: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#7A88F5',
  },
  headerTintColor: '#FFF',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerBackTitleVisible: false,
};

export default function StackNavigator(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      {Object.keys(ScreenMapping).map(stackScreen)}
    </Stack.Navigator>
  );
}
