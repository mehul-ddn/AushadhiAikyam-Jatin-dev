import * as React from "react";

import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import NotificationScreen from "../screens/NotificationScreen";
import SearchScreen from "../screens/SearchScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Search">
      <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
