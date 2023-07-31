import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import type { RouteParamList } from './route-params';

type AppRoutingConfig = {
  initialRouteName: keyof RouteParamList;
  screenOptions: NativeStackNavigationOptions;
  routes: {
    [Property in keyof RouteParamList]: {
      options: NativeStackNavigationOptions;
    };
  };
};

const RoutingConfig: AppRoutingConfig = {
  initialRouteName: 'Home',
  // common screen options
  screenOptions: {
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#7A88F5',
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
  // screen specific options
  routes: {
    Home: {
      options: {
        title: 'Story Paths',
      },
    },
    LoadingStory: { options: {} },
    GeneratedStory: { options: {} },
  },
};

export default RoutingConfig;
