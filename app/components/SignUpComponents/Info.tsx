import { StyleSheet, View } from "react-native";
import React from "react";
import DText from "../themedComponents/DText";
import { layout } from "../../constants/layout";

const Info = () => {
  const styles = StyleSheet.create({
    root: {
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <View style={styles.root}>
      <View>
        <DText style={{ fontFamily: "PoppinsBold", fontSize: 18 }}>
          Sign in to Growmer
        </DText>
        <View
          style={{
            height: 20,
            width: 70,
            backgroundColor: "#58C3B6",
            position: "absolute",
            right: 0,
            bottom: -2,
            zIndex: -1,
          }}
        />
      </View>
      <DText
        style={{
          fontFamily: "PoppinsRegular",
          fontSize: 14,
          paddingHorizontal: layout().width * 0.1,
          textAlign: "center",
        }}
      >
        Welcome back! Sign in using your social account or email to continue us
      </DText>
    </View>
  );
};

export default Info;
