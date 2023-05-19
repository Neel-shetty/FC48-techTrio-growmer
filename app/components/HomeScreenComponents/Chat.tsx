import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import React from "react";
import DText from "../themedComponents/DText";
import { layout } from "../../constants/layout";
import { Text } from "../Themed";
import { formatDistance, subDays } from "date-fns";
import { Link } from "expo-router";

type ChatType = {
  id: number;
  name: string;
  lastMessage: string;
  lastMessageTime: Date;
  profilePic: any;
};

const Chat = ({ chat, score }: { chat: ChatType; score: number }) => {
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
        height: 52,
        // backgroundColor: "pink",
      }}
    >
      <Link href={"/chat"}>
        <View style={{ marginRight: 10, paddingRight: 10 }}>
          <Image
            style={{ height: 52, width: 52, borderRadius: 26 }}
            source={chat.profilePic}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            flex: 1,
            paddingTop: 6,
            // backgroundColor: "pink",
          }}
        >
          <DText
            style={{ fontSize: 20, padding: 0, margin: 0, lineHeight: 23 }}
          >
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
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 50,
          }}
        >
          <Text
            style={{
              textAlign: "right",
              fontFamily: "PoppinsSemiBold",
              fontSize: 16,
            }}
            lightColor="red"
            darkColor="#9b9b9b"
          >
            {score}
          </Text>
        </View>
      </Link>
    </TouchableOpacity>
  );
};

export default Chat;

const styles = StyleSheet.create({});
