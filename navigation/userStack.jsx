import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from "../components/Home";
import { Profile } from "../components/Profile";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function UserStack() {
  return (
 
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}
