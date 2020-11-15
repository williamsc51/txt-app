import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Main from './main';
import BookList from './books/booklist';

const Tab = createBottomTabNavigator();

export default function Nav() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Shop') {
              iconName = focused ? 'pricetag' : 'pricetag-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#FFA500',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={Main} />
        <Tab.Screen name="Shop" component={BookList} />
        <Tab.Screen name="Cart" component={Main} />
        <Tab.Screen name="Profile" component={Main} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
