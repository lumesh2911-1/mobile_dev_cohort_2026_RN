import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStaticNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import ProfileScreen from "../../screens/ProfileScreen";

const Tab = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
});
const Navigation = createStaticNavigation(Tab);
export default function StaticBottomTabNavigator() {
  return (
    <>
      <Navigation />
    </>
  );
}

const styles = StyleSheet.create({});
