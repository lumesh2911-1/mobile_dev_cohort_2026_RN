import { FontAwesome } from "@expo/vector-icons";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import logo from "../../assets/images/android-icon-monochrome.png";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />

      {/* SECTION ONE */}
      <View style={styles.sectionOne}>
        <Image source={logo} style={styles.logo} />

        <Text style={styles.heading}>Sign In</Text>

        <Text style={styles.subHeading}>
          Let&apos;s experience the joy of telecare AI.
        </Text>
      </View>

      {/* SECTION TWO */}
      <View style={styles.sectionTwo}>
        {/* EMAIL */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email Address</Text>

          <View style={[styles.inputContainer, styles.activeInput]}>
            <FontAwesome
              name="envelope-o"
              size={20}
              color="#111"
              style={styles.inputIcon}
            />

            <TextInput
              placeholder="elementary221b@gmail.com"
              placeholderTextColor="#8A8A8A"
              style={styles.input}
            />
          </View>
        </View>

        {/* PASSWORD */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Password</Text>

          <View style={styles.inputContainer}>
            <FontAwesome
              name="lock"
              size={22}
              color="#111"
              style={styles.inputIcon}
            />

            <TextInput
              placeholder="Enter your password..."
              placeholderTextColor="#8A8A8A"
              secureTextEntry
              style={styles.input}
            />

            <FontAwesome name="eye-slash" size={20} color="#B0B0B0" />
          </View>
        </View>

        {/* BUTTON */}
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>

          <FontAwesome name="arrow-right" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* SECTION THREE */}
      <View style={styles.sectionThree}>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.socialBox}>
            <FontAwesome name="facebook" size={26} color="#111" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialBox}>
            <FontAwesome name="google" size={24} color="#111" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialBox}>
            <FontAwesome name="instagram" size={26} color="#111" />
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>
          Don&apos;t have an account?
          <Text style={styles.greenText}> Sign Up.</Text>
        </Text>

        <Text style={styles.forgotText}>Forgot your password?</Text>
      </View>
    </SafeAreaView>
  );
}

const PRIMARY = "#8ED80E";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
  },

  sectionOne: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 6,
  },

  heading: {
    fontSize: 38,
    fontWeight: "800",
    color: "#111",
    marginBottom: 10,
  },

  subHeading: {
    fontSize: 18,
    color: "#8A8A8A",
    textAlign: "center",
  },

  sectionTwo: {
    flex: 1.5,
    gap: 22,
  },

  inputWrapper: {
    gap: 10,
  },

  label: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    borderRadius: 22,
    paddingHorizontal: 18,
    height: 72,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },

  activeInput: {
    borderColor: "#C8F17A",
    borderWidth: 2,
  },

  inputIcon: {
    marginRight: 14,
  },

  input: {
    flex: 1,
    fontSize: 18,
    color: "#111",
  },

  button: {
    height: 68,
    backgroundColor: PRIMARY,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "500",
  },

  sectionThree: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  iconContainer: {
    flexDirection: "row",
    gap: 18,
    marginBottom: 35,
  },

  socialBox: {
    width: 64,
    height: 64,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  footerText: {
    fontSize: 16,
    color: "#111",
    marginBottom: 12,
  },

  greenText: {
    color: PRIMARY,
    fontWeight: "500",
  },

  forgotText: {
    fontSize: 18,
    color: PRIMARY,
    textDecorationLine: "underline",
  },
});
