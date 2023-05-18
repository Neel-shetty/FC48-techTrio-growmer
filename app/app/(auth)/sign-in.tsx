import { Button, StyleSheet, View } from "react-native";
import React from "react";
import { useAuth } from "../../context/auth";
import { Text, useThemeColor } from "../../components/Themed";
import Colors from "../../constants/Colors";
import Header from "../../components/signInComponents/Header";
import InputFields from "../../components/signInComponents/InputFields";
import Info from "../../components/signInComponents/Info";

const signIn = () => {
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

export default signIn;

const styles = StyleSheet.create({
  spacer: {
    height: 20,
  },
});
