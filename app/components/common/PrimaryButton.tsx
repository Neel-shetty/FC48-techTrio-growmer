import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Text, useThemeColor } from "../Themed";
import Colors from "../../constants/Colors";
import { layout } from "../../constants/layout";

const PrimaryButton = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) => {
  const buttonBackgroundColor = useThemeColor(
    {
      dark: Colors.dark.buttonBackground,
      light: Colors.light.buttonBackground,
    },
    "buttonBackground"
  );
  const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: buttonBackgroundColor,
      width: layout().width,
    },
  });
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text lightColor={Colors.light.text} darkColor={Colors.dark.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
