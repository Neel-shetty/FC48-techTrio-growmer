import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Text, useThemeColor } from "../Themed";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const Header = () => {
  const iconColor = useThemeColor(
    { dark: Colors.dark.text, light: Colors.light.text },
    "backButton"
  );
  return (
    <View style={{ height: 50, justifyContent: "center", paddingLeft: 10 }}>
      <TouchableOpacity>
        <Ionicons name="md-arrow-back" size={24} color={iconColor} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
