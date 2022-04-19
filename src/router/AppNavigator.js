import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SelectOptionScreen from "../screens/SelectOptionScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelectOption" headerMode="none">
        <Stack.Screen name="SelectOption" component={SelectOptionScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
