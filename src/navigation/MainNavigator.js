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


import ExerciseScreen from '../screens/ExerciseScreen';

// Update TutorialStack:

const TutorialStack = () => (

  <Stack.Navigator>

    <Stack.Screen name="TutorialsList" component={TutorialsScreen} />

    <Stack.Screen name="TutorialDetail" component={TutorialDetailScreen} />

    <Stack.Screen name="Exercise" component={ExerciseScreen} />

  </Stack.Navigator>

);

import ProgressScreen from '../screens/ProgressScreen';

// Update MainNavigator

export default function MainNavigator() {

  return (

    <Tab.Navigator

      screenOptions={{

        tabBarLabelStyle: { fontSize: 12 },

        tabBarActiveTintColor: '#2196F3',

      }}

    >

      <Tab.Screen name="Home" component={HomeScreen} />

      <Tab.Screen name="Tutorials" component={TutorialStack} />

      <Tab.Screen name="Progress" component={ProgressScreen} />

    </Tab.Navigator>

  );

}

import { Ionicons } from '@expo/vector-icons';

// Update Tab.Screen components

<>
    // Update Tab.Screen components
    <Tab.Screen

        name="Home"

        component={HomeScreen}

        options={{
            tabBarIcon: ({ color }) => (

                <Ionicons name="home" size={24} color={color} />

            ),
        }} /><Tab.Screen

        name="Tutorials"

        component={TutorialStack}

        options={{
            tabBarIcon: ({ color }) => (

                <Ionicons name="book" size={24} color={color} />

            ),
        }} /><Tab.Screen

        name="Progress"

        component={ProgressScreen}

        options={{
            tabBarIcon: ({ color }) => (

                <Ionicons name="stats-chart" size={24} color={color} />

            ),
        }} /></>
