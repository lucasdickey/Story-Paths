import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import type { RouteParamList } from '@screens/route-params';
import type { StackScreenProps } from '@navigation/StackNavigator';

type AppRoutingConfig = {
  initialRouteName: keyof RouteParamList;
  screenOptions: NativeStackNavigationOptions;
  routes: {
    [Property in keyof RouteParamList]: {
      options:
        | NativeStackNavigationOptions
        | (({
            navigation,
            route,
          }: StackScreenProps<any>) => NativeStackNavigationOptions);
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
    headerBackTitleVisible: false,
  },
  // screen specific options
  routes: {
    Home: {
      options: {
        title: 'Story Paths',
      },
    },
    LoadingStory: {
      options: {
        title: 'Creating Your Story!',
      },
    },
    GeneratedStory: {
      options: ({ route }: StackScreenProps<'GeneratedStory'>) => ({
        title: route.params.title,
      }),
    },
  },
};

export default RoutingConfig;
