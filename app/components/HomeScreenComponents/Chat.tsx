import { StyleSheet, Image, View } from "react-native";
import React from "react";
import DText from "../themedComponents/DText";
import { layout } from "../../constants/layout";
import { Text } from "../Themed";

const Chat = () => {
  return (
    <View
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
          source={require("../../assets/images/pfp.jpeg")}
        />
      </View>
      <View style={{ justifyContent: "center", flex: 2, paddingTop: 6 }}>
        <DText style={{ fontSize: 20, padding: 0, margin: 0, lineHeight: 23 }}>
          Test
        </DText>
        <Text
          style={{ fontFamily: "PoppinsRegular" }}
          lightColor={"#797C7B"}
          darkColor="#9b9b9b"
        >
          How are you today?
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text lightColor="#797C7B" darkColor="#9b9b9b">
          2 min ago
        </Text>
        <View style={{ height: 21, width: 21 }}></View>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
