import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import TripFormScreen from '../screens/TripFormScreen';
import MapScreen from '../screens/MapScreen';
import ItineraryScreen from '../screens/ItineraryScreen';
import BookingScreen from '../screens/BookingScreen';
import PlaceSearchScreen from '../screens/PlaceSearchScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabIcon = ({ emoji, focused }) => (
  <Text style={{ fontSize: 22, opacity: focused ? 1 : 0.5 }}>{emoji}</Text>
);

const TripTabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        backgroundColor: '#1a1a2e',
        borderTopColor: '#16213e',
        paddingBottom: 4,
        height: 60,
      },
      tabBarActiveTintColor: '#4fc3f7',
      tabBarInactiveTintColor: '#8899aa',
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="Itinerary"
      component={ItineraryScreen}
      options={{
        tabBarLabel: '일정표',
        tabBarIcon: ({ focused }) => <TabIcon emoji="📅" focused={focused} />,
      }}
    />
    <Tab.Screen
      name="Map"
      component={MapScreen}
      options={{
        tabBarLabel: '지도',
        tabBarIcon: ({ focused }) => <TabIcon emoji="🗺️" focused={focused} />,
      }}
    />
    <Tab.Screen
      name="Booking"
      component={BookingScreen}
      options={{
        tabBarLabel: '예매',
        tabBarIcon: ({ focused }) => <TabIcon emoji="🎫" focused={focused} />,
      }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#1a1a2e' },
        headerTintColor: '#ffffff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: '✈️ 여행 플래너' }} />
      <Stack.Screen name="TripForm" component={TripFormScreen} options={{ title: '여행 정보 입력' }} />
      <Stack.Screen name="TripTabs" component={TripTabs} options={{ headerShown: false }} />
      <Stack.Screen name="PlaceSearch" component={PlaceSearchScreen} options={{ title: '장소 검색' }} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} options={{ title: '장소 상세' }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
