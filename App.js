import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; // Your HomeScreen
import TutorialsScreen from './screens/TutorialsScreen'; // Your TutorialsScreen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tutorials" component={TutorialsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

