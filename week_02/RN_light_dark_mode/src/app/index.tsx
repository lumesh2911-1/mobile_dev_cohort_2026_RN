import { useState } from "react";
import { StatusBar, StyleSheet, Switch, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: darkMode ? "#000" : "#fff" },
      ]}
    >
      <StatusBar barStyle={darkMode ? "light-content" : "dark-content"} />
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        ios_backgroundColor="#3e3e3e"
        onValueChange={setDarkMode}
        value={darkMode}
      />
      <Text style={{ color: darkMode ? "#fff" : "#000" }}>
        Edit src/app/index.tsx to edit this screen.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
