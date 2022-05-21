import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {Feed} from './src/screens/feed';
import {NewsDetails} from './src/screens/NewsDetails';

const Stack = createSharedElementStackNavigator();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Feed"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen
          name="NewsDetails"
          component={NewsDetails}
          options={{
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
