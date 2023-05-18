import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth } from "../../context/auth";
import { useThemeColor } from "../../components/Themed";

const signIn = () => {
  const { signIn } = useAuth();
  const color = useThemeColor(
    { light: "lightColor", dark: "darkColor" },
    "background"
  );
  console.log("🚀 ~ file: sign-in.tsx:12 ~ signIn ~ color:", color);
  console.log("🚀 ~ file: sign-in.tsx:7 ~ signIn ~ signIn:", signIn);
  return (
    <View>
      <Text>sign</Text>
      <Button onPress={signIn} title="Login" />
    </View>
  );
};

export default signIn;

const styles = StyleSheet.create({});
