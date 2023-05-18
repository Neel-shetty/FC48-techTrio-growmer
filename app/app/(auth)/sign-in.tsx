import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth } from "../../context/auth";

const signIn = () => {
  const { signIn } = useAuth();
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
