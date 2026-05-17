import * as React from "react";
import { View, Text } from "react-native";
import StaticStackNavigator from "./stack/StaticStackNavigator";
import DynamicStackNavigator from "./stack/DynamicStackNavigator";
import StaticBottomTabNavigator from "./tab/StaticBottomTabNavigator";
import DynamicBottomTabNavigator from "./tab/DynamicBottomTabNavigator";
import StaticDrawerNavigator from "./drawer/StaticDrawerNavigator";
import DynamicDrawerNavigator from "./drawer/DynamicDrawerNavigator";
import StaticMaterialTopTab from "./materialTopTab/StaticMaterialTopTab";
import DynamicMaterialTopTab from "./materialTopTab/DynamicMaterialTopTab";

export default function AppNavigator() {
  return (
    <>
      {/* Stack Navigator */}
      {/* <StaticStackNavigator /> */}
      {/* <DynamicStackNavigator /> */}

      {/* Bottom Tab Navigator */}
      {/* <StaticBottomTabNavigator /> */}
      {/* <DynamicBottomTabNavigator />
       */}

      {/* Drawer Navigator */}
      {/* <StaticDrawerNavigator /> */}
      {/* <DynamicDrawerNavigator />
      
      */}

      {/* Material Top Tab */}
      {/* <StaticMaterialTopTab /> */}
      <DynamicMaterialTopTab />
    </>
  );
}
