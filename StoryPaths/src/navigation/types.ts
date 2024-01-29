import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { GeneratedStoryRouteParams } from '@screens/GeneratedStoryScreen';
import type { HomeRouteParams } from '@screens/HomeScreen';
import type { LoadingStoryRouteParams } from '@screens/LoadingStoryScreen';

export type RouteParamList = {
  GeneratedStory: GeneratedStoryRouteParams;
  Home: HomeRouteParams;
  LoadingStory: LoadingStoryRouteParams;
};

export type StackScreenProps<T extends keyof RouteParamList> =
  NativeStackScreenProps<RouteParamList, T>;
