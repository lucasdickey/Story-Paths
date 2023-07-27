import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

type AppRoutingConfig = {
  initialRouteName: string;
  screenOptions: NativeStackNavigationOptions;
  routes: {
    [screen: string]: {
      options: NativeStackNavigationOptions;
    };
  };
};

const RoutingConfig: AppRoutingConfig = {
  initialRouteName: 'Story Paths', // <-- @sergio - I thought this would change the header on the first screen, but it did not
  screenOptions: {
    headerTitleAlign: 'center',
  },
  routes: {
    Home: {
      options: {
        headerStyle: {
          backgroundColor: '#7A88F5',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
  },
};

export default RoutingConfig;
