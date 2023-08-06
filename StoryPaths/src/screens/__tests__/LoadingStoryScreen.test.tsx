import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { StoryGeneratorService } from '@services/StoryGeneratorService';
import LoadingStoryScreen from '@screens/LoadingStoryScreen';
import { RouteProp } from '@react-navigation/native';
import { RouteParamList } from '@screens/route-params';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

jest.mock('@services/StoryGeneratorService');
jest.mock('@components/icons/StoryPathsIcon');

describe('LoadingStoryScreen', () => {
  const mockRoute = {
    key: 'mock-key',
    name: 'LoadingStory',
    params: {
      name: 'John',
      villain: 'Darth Vader',
      location: 'Tatooine',
      age: 25,
      voice: 'deep',
    },
  } as unknown as RouteProp<RouteParamList, 'LoadingStory'>;

  const mockNavigation = {
    dispatch: jest.fn(),
    navigate: jest.fn(),
    reset: jest.fn(),
    goBack: jest.fn(),
    setParams: jest.fn(),
    isFocused: jest.fn(),
    canGoBack: jest.fn(),
    dangerouslyGetParent: jest.fn(),
    dangerouslyGetState: jest.fn(),
    replace: jest.fn(),
  } as unknown as NativeStackNavigationProp<
    RouteParamList,
    'LoadingStory',
    undefined
  >;

  it('should render the loading message', () => {
    const mockGeneratedStory = 'Once upon a time...';
    (StoryGeneratorService.createStory as jest.Mock).mockResolvedValueOnce(
      mockGeneratedStory,
    );

    const { getByText } = render(
      <LoadingStoryScreen navigation={mockNavigation} route={mockRoute} />,
    );
    expect(getByText('Loading Story')).toBeDefined();
  });

  it('should call StoryGeneratorService.createStory with the correct parameters', async () => {
    const mockGeneratedStory = {
      title: 'Story',
      story: 'Once upon a time...',
    };
    (StoryGeneratorService.createStory as jest.Mock).mockResolvedValueOnce(
      mockGeneratedStory,
    );

    await waitFor(() =>
      render(
        <LoadingStoryScreen navigation={mockNavigation} route={mockRoute} />,
      ),
    );
    expect(StoryGeneratorService.createStory).toHaveBeenCalledWith({
      name: 'John',
      villain: 'Darth Vader',
      location: 'Tatooine',
      age: 25,
      voice: 'deep',
    });
  });

  it('should navigate to GeneratedStoryScreen with the generated story', async () => {
    const mockGeneratedStory = {
      title: 'Story',
      story: 'Once upon a time...',
    };
    (StoryGeneratorService.createStory as jest.Mock).mockResolvedValueOnce(
      mockGeneratedStory,
    );
    await waitFor(() =>
      render(
        <LoadingStoryScreen navigation={mockNavigation} route={mockRoute} />,
      ),
    );
    expect(mockNavigation.replace).toHaveBeenCalledWith(
      'GeneratedStory',
      mockGeneratedStory,
    );
  });

  it('should log an error if StoryGeneratorService.createStory throws an error', async () => {
    const mockError = new Error('Something went wrong');
    (StoryGeneratorService.createStory as jest.Mock).mockRejectedValueOnce(
      mockError,
    );
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementationOnce(() => {});
    await waitFor(() =>
      render(
        <LoadingStoryScreen navigation={mockNavigation} route={mockRoute} />,
      ),
    );
    expect(consoleSpy).toHaveBeenCalledWith('Error', mockError);
  });
});
