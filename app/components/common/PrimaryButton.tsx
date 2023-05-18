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
      light: Colors.light.accent,
    },
    "buttonBackground"
  );
  const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: buttonBackgroundColor,
      width: layout().widthp,
      height: 48,
      borderRadius: 16,
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text
        style={{ fontFamily: "PoppinsSemiBold", color: "white", fontSize: 16 }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
