import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import React from "react";
import DText from "../themedComponents/DText";
import { layout } from "../../constants/layout";
import { Text } from "../Themed";
import { formatDistance, subDays } from "date-fns";

type ChatType = {
  id: number;
  name: string;
  lastMessage: string;
  lastMessageTime: Date;
  profilePic: any;
};

const Chat = ({ chat }: { chat: ChatType }) => {
  const date = formatDistance(chat.lastMessageTime, new Date(), {
    addSuffix: true,
  });
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: layout().widthp,
        marginVertical: 15,
      }}
    >
      <View style={{ flex: 1 }}>
        <Image
          style={{ height: 52, width: 52, borderRadius: 26 }}
          source={chat.profilePic}
        />
      </View>
      <View style={{ justifyContent: "center", flex: 2, paddingTop: 6 }}>
        <DText style={{ fontSize: 20, padding: 0, margin: 0, lineHeight: 23 }}>
          {chat.name}
        </DText>
        <Text
          style={{ fontFamily: "PoppinsRegular" }}
          lightColor={"#797C7B"}
          darkColor="#9b9b9b"
        >
          {chat.lastMessage}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{ textAlign: "right" }}
          lightColor="#797C7B"
          darkColor="#9b9b9b"
        >
          {date}
        </Text>
        <View style={{ height: 21, width: 21 }}></View>
      </View>
    </TouchableOpacity>
  );
};

export default Chat;

const styles = StyleSheet.create({});
