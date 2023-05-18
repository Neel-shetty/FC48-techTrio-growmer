import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { layout } from "../../constants/layout";
import DText from "../themedComponents/DText";

const Message = ({
  textAlign,
  message,
}: {
  textAlign: "right" | "left";
  message: string;
  time: Date;
}) => {
  return (
    <View
      style={{
        flexDirection: textAlign === "left" ? "row" : "column",
        width: layout().width,
        // backgroundColor: "pink",
      }}
    >
      {textAlign === "left" && (
        <Image
          source={require("../../assets/images/pfp.jpeg")}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            marginRight: 10,
          }}
        />
      )}
      <View></View>
      <View style={textAlign === "right" ? styles.rRoot : styles.lRoot}>
        <Text
          style={[
            styles.text,
            textAlign === "left" ? null : { color: "white" },
          ]}
        >
          {message}
        </Text>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  rRoot: {
    backgroundColor: "#20A090",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.25)",
    maxWidth: "60%",
    alignSelf: "flex-end",
    padding: 10,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginRight: 5,
    // minHeight: 36,
    justifyContent: "center",
    marginVertical: 10,
    elevation: 1,
  },
  lRoot: {
    // backgroundColor: "pink",
    backgroundColor: "#F2F7FB",
    maxWidth: "60%",
    alignSelf: "flex-start",
    marginLeft: 5,
    padding: 10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    minHeight: 36,
    justifyContent: "center",
    marginVertical: 10,
    elevation: 1,
  },
  text: {
    fontFamily: "PoppinsRegular",
    fontSize: 14,
  },
});
