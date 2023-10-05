import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LeaguesScreen from './screens/LeaguesScreen';
import Screen1 from './screens/beforeHomeScreen/Screen1';
import ResearchScreen from './screens/ResearchScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import ProfileScreen from './screens/profile/Profile';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Profile">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./assests/icons/home.png')}
              style={{width: 24, height: 24}}
              tintColor={focused ? '#6231AD' : '#B5C0C8'}
            />
          ),
          tabBarActiveTintColor: '#6231AD',
        }}
      />
      <Tab.Screen
        name="Leagues"
        component={LeaguesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./assests/icons/trophy.png')}
              style={{width: 24, height: 24}}
              tintColor={focused ? '#6231AD' : '#B5C0C8'}
            />
          ),
          tabBarActiveTintColor: '#6231AD',
        }}
      />
      <Tab.Screen
        name="Research"
        component={ResearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./assests/icons/search.png')}
              style={{width: 24, height: 24}}
              tintColor={focused ? '#6231AD' : '#B5C0C8'}
            />
          ),
          tabBarActiveTintColor: '#6231AD',
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./assests/icons/Leaderboard.png')}
              style={{width: 24, height: 24}}
              tintColor={focused ? '#6231AD' : '#B5C0C8'}
            />
          ),
          tabBarActiveTintColor: '#6231AD',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./assests/icons/user.png')}
              style={{width: 24, height: 24}}
              tintColor={focused ? '#6231AD' : '#B5C0C8'}
            />
          ),
          tabBarActiveTintColor: '#6231AD',
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="screen1" component={Screen1} />
      <Stack.Screen name="bottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
