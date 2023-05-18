import { StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { Text, useThemeColor } from "../Themed";
import Colors from "../../constants/Colors";
import { layout } from "../../constants/layout";

const PrimaryButton = ({
  title,
  onPress,
  loading,
}: {
  title: string;
  onPress: () => void;
  loading?: boolean;
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
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text
          style={{
            fontFamily: "PoppinsSemiBold",
            color: "white",
            fontSize: 16,
          }}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default PrimaryButton;
