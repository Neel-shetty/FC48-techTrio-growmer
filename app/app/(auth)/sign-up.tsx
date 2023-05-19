import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/signInComponents/Header";
import Info from "../../components/signInComponents/Info";
import { useThemeColor } from "../../components/Themed";
import { useAuth } from "../../context/auth";
import Colors from "../../constants/Colors";
import InputFields from "../../components/SignUpComponents/InputFields";

const SignUp = () => {
  const { signIn } = useAuth();
  const textColor = useThemeColor(
    { dark: Colors.dark.text, light: Colors.light.text },
    "text"
  );
  console.log("🚀 ~ file: sign-in.tsx:7 ~ signIn ~ signIn:", signIn);
  const backgroundColor = useThemeColor(
    { dark: Colors.dark.background, light: Colors.light.background },
    "background"
  );
  
  return (
    <View style={{ backgroundColor: backgroundColor }}>
      <Header />
      <View style={styles.spacer} />
      <Info />
      <View style={styles.spacer} />
      <InputFields />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
