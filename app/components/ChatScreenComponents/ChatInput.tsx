import { StyleSheet, TouchableOpacity, View, TextInput } from "react-native";
import React from "react";
import { useThemeColor } from "../Themed";
import Colors from "../../constants/Colors";
import { layout } from "../../constants/layout";
import { Ionicons } from "@expo/vector-icons";

const ChatInput = ({
  handleBlur,
  handleChange,
  value,
  onPress,
}: {
  handleBlur: any;
  handleChange: any;
  value: string;
  onPress: () => void;
}) => {
  const textColor = useThemeColor(
    {
      light: Colors.light.text,
      dark: Colors.dark.text,
    },
    "text"
  );
  const backgroundColor = useThemeColor(
    { dark: Colors.dark.background, light: Colors.light.background },
    "background"
  );
  const inputColor = useThemeColor(
    { dark: "#797979", light: "#F3F6F6" },
    "HomeBackground"
  );

  const iconColor = useThemeColor(
    { dark: Colors.dark.text, light: Colors.light.text },
    "text"
  );

  const styles = StyleSheet.create({
    root: {
      backgroundColor,
      justifyContent: "space-between",
      flexDirection: "row",
      width: layout().widthp,
      alignSelf: "center",
      alignItems: "center",
      paddingTop: 10,
    },
    input: {
      fontFamily: "PoppinsRegular",
      fontSize: 16,
      height: 40,
      color: textColor,
      backgroundColor: inputColor,
      width: layout().width * 0.7,
      alignSelf: "center",
      borderRadius: 12,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
  });
  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        onChangeText={handleChange}
        onBlur={handleBlur}
        value={value}
        // placeholder={textColor}
      />
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="send" size={24} color={iconColor} />
      </TouchableOpacity>
    </View>
  );
};

export default ChatInput;
