import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function UserId() {
  const { userId } = useLocalSearchParams();
  return (
    <View>
      <Text>UserId : {userId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
