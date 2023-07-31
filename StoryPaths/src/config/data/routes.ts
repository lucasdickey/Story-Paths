import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import type { RouteParamList } from './route-params';

type ScreenOptions = {
  options: NativeStackNavigationOptions;
};

type AppRoutingConfig = {
  initialRouteName: keyof RouteParamList;
  screenOptions: NativeStackNavigationOptions;
  routes: {
    [Property in keyof RouteParamList]: ScreenOptions;
  };
};

const RoutingConfig: AppRoutingConfig = {
  initialRouteName: 'Home',
  screenOptions: {
    headerTitleAlign: 'center',
  },
  routes: {
    Home: {
      options: {
        title: 'Story Paths',
        headerStyle: {
          backgroundColor: '#7A88F5',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    LoadingStory: { options: {} },
    GeneratedStory: { options: {} },
  },
};

export default RoutingConfig;
