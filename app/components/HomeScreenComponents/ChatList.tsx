import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Chat from "./Chat";
import { layout } from "../../constants/layout";
import Colors from "../../constants/Colors";
import { useThemeColor } from "../Themed";

const ChatList = () => {
  const backgroundColor = useThemeColor(
    { dark: Colors.dark.background, light: Colors.light.background },
    "background"
  );
  return (
    <View
      style={{
        width: layout().width,
        alignItems: "center",
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: backgroundColor,
        flex: 1,
      }}
    >
      <Chat />
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({});
