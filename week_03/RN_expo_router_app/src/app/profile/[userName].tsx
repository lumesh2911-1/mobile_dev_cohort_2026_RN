import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function UserName() {
  const { userName } = useLocalSearchParams();
  return (
    <View>
      <Text>UserName : {userName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
