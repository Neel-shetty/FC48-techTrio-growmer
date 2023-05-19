import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Chat from "./Chat";
import { layout } from "../../constants/layout";
import Colors from "../../constants/Colors";
import { useThemeColor } from "../Themed";
import firestore from "@react-native-firebase/firestore";
import { useAuth } from "../../context/auth";

const ChatList = () => {
  const backgroundColor = useThemeColor(
    { dark: Colors.dark.background, light: Colors.light.background },
    "background"
  );

  const { user } = useAuth();

  const chatList = [
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Hello",
      lastMessageTime: new Date(2023, 5, 9),
      profilePic: require("../../assets/images/pffp.jpeg"),
    },
    {
      id: 2,
      name: "buzz lightyear",
      lastMessage: "hehe boi",
      lastMessageTime: new Date(),
      profilePic: require("../../assets/images/buzz.jpg"),
    },
  ];

  async function getChatList() {
    const chats = await firestore()
      .collection("chats")
      .where("id", "==", user.uid)
      .get();
    console.log(
      "🚀 ~ file: ChatList.tsx ~ line 67 ~ getChatList ~ chats",
      chats
    );
  }

  React.useEffect(() => {
    getChatList();
  }, []);

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
      <Chat chat={chatList[0]} />
      <Chat chat={chatList[1]} />
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({});
