import { StyleSheet } from "react-native";
import React from "react";
import { Text, TextProps } from "../Themed";

const DText = (props: TextProps) => {
  return (
    <Text {...props} style={[{ fontFamily: "PoppinsRegular" }, props.style]} />
  );
};

export default DText;

const styles = StyleSheet.create({});
