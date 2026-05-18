import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Id() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>ID : {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
