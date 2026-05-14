import { useState } from "react";
import { StatusBar, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [data, setData] = useState("");
  const image =
    "https://images.unsplash.com/photo-1777829999062-917dd30ad425?q=80&w=2224&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const students = [
    {
      id: 1,
      name: "John",
      age: 20,
    },
    {
      id: 2,
      name: "Jane",
      age: 21,
    },
    {
      id: 3,
      name: "Bob",
      age: 22,
    },
    {
      id: 4,
      name: "Alice",
      age: 23,
    },
    {
      id: 5,
      name: "Charlie",
      age: 24,
    },
    {
      id: 6,
      name: "David",
      age: 25,
    },
    {
      id: 7,
      name: "Eve",
      age: 26,
    },
    {
      id: 8,
      name: "Frank",
      age: 27,
    },
    {
      id: 9,
      name: "Grace",
      age: 28,
    },
    {
      id: 10,
      name: "Henry",
      age: 29,
    },
    {
      id: 11,
      name: "Ivy",
      age: 30,
    },
    {
      id: 12,
      name: "Jack",
      age: 31,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      {/* <Image
        source={{
          uri: image,
        }}
        height={500}
        width={500}
      /> */}
      {/* <Image
        source={require("../../assets/images/icon.png")}
        style={{ width: 200, height: 200 }}
      /> */}
      {/* <TextInput
        placeholder="Enter value"
        placeholderTextColor={"red"}
        style={{ borderWidth: 1, padding: 10, margin: 10, borderRadius: 10 }}
        value={data}
        onChangeText={setData}
      /> */}

      {/* <Pressable onPress={() => alert("Hello")}>
        <Text>Press me</Text>
      </Pressable> */}

      {/* <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
      </ScrollView> */}

      {/* <Button title="Press me" onPress={() => alert("Hello")} /> */}

      {/* <Switch /> */}

      {/* <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      /> */}

      {/* <KeyboardAvoidingView>
        <TextInput
          placeholder="Enter value"
          value={data}
          onChangeText={setData}
          style={{ borderWidth: 1, padding: 10, margin: 10, borderRadius: 10 }}
        />
      </KeyboardAvoidingView> */}
      {/* <ImageBackground source={{ uri: image }}>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
        <Text>dfsd</Text>
      </ImageBackground> */}
      {/* <TouchableOpacity onPress={() => alert("Test")}>
        <Text>Press me</Text>
      </TouchableOpacity> */}

      <Text style={styles.heading} numberOfLines={2}>
        Welcome to React Native Core Compoents Welcome to React Native Core
        Compoents Welcome to React Native Core Compoents Welcome to React Native
        Core Compoents
      </Text>

      <Text
        style={StyleSheet.compose(styles.heading, styles.colored)}
        numberOfLines={1}
      >
        Welcome to :
      </Text>
      <Text style={StyleSheet.flatten([styles.heading, styles.colored])}>
        React Native Core Compoents
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 18,
  },
  colored: {
    color: "red",
  },
});
