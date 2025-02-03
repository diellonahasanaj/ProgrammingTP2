import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';

import TutorialsScreen from '../screens/TutorialsScreen';

import TutorialDetailScreen from '../screens/TutorialDetailScreen';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const TutorialStack = () => (

  <Stack.Navigator>

    <Stack.Screen name="TutorialsList" component={TutorialsScreen} />

    <Stack.Screen name="TutorialDetail" component={TutorialDetailScreen} />

  </Stack.Navigator>

);

export default function MainNavigator() {

  return (

    <Tab.Navigator>

      <Tab.Screen name="Home" component={HomeScreen} />

      <Tab.Screen name="Tutorials" component={TutorialStack} />

      {/* We'll add other tabs later */}

    </Tab.Navigator>

  );

}
