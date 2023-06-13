import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import YouTubePlayer from '../screens/YouTubePlayer';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name='BottomTabs' 
          component={BottomTabs} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;