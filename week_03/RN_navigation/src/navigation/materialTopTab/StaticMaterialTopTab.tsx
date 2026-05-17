import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStaticNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../../screens/HomeScreen";
import ProfileScreen from "../../screens/ProfileScreen";

const MaterialTopTab = createMaterialTopTabNavigator({
  screens: {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
});
const Navigation = createStaticNavigation(MaterialTopTab);

export default function StaticMaterialTopTab() {
  return (
    <>
      <Navigation />
    </>
  );
}

const styles = StyleSheet.create({});
