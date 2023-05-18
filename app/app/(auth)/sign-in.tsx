import { Button, StyleSheet, View } from "react-native";
import React from "react";
import { useAuth } from "../../context/auth";
import { Text, useThemeColor } from "../../components/Themed";
import Colors from "../../constants/Colors";
import Header from "../../components/signInComponents/Header";
import PrimaryButton from "../../components/common/PrimaryButton";

const signIn = () => {
  const { signIn } = useAuth();
  const textColor = useThemeColor(
    { dark: Colors.dark.text, light: Colors.light.text },
    "text"
  );
  console.log("🚀 ~ file: sign-in.tsx:7 ~ signIn ~ signIn:", signIn);
  return (
    <View>
      <Header />
      <Text darkColor={Colors.dark.text} lightColor={Colors.light.text}>
        hehe boi
      </Text>
      <PrimaryButton title={"Sign In"} onPress={signIn} />
    </View>
  );
};

export default signIn;

const styles = StyleSheet.create({});
