import { StyleSheet } from "react-native";
import React from "react";
import { Text, TextProps } from "../Themed";
import Colors from "../../constants/Colors";

const DText = (props: TextProps) => {
  return (
    <Text
      lightColor={Colors.light.text}
      darkColor={Colors.dark.text}
      {...props}
      style={[{ fontFamily: "PoppinsRegular" }, props.style]}
    />
  );
};

export default DText;

const styles = StyleSheet.create({});
