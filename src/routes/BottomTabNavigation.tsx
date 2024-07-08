import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Home from '../assets/svg/Home.svg'
import Searchs from '../assets/svg/Searchs.svg'
import PlusCircle from '../assets/svg/PlusCircle.svg'
import HeartOutline from '../assets/svg/HeartOutline.svg'
import UserCircleO from '../assets/svg/UserCircleO.svg'
import FavouriteScreen from "../screens/FavouriteScreen";
import UploadScreen from "../screens/UploadScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: 'green',
        headerShown: false
      }}>
        <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
            tabBarIcon: ({color, size}) => (
              <Home width={120} height={40} fill={color} />
            ),
          }}/>
        <Tab.Screen name="SearchScreen" component={SearchScreen} options={{
            tabBarIcon: ({color, size}) => (
              <Searchs width={120} height={40} fill={color} />
            ),
          }}/>
        <Tab.Screen name="FavouriteScreen" component={FavouriteScreen} options={{
            tabBarIcon: ({color, size}) => (
              <PlusCircle width={120} height={40} fill={color} />
            ),
          }}/>
        <Tab.Screen name="UploadScreen" component={UploadScreen} options={{
            tabBarIcon: ({color, size}) => (
              <HeartOutline width={120} height={40} fill={color} />
            ),
          }}/>
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{
            tabBarIcon: ({color, size}) => (
              <UserCircleO width={120} height={40} fill={color} />
            ),
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
