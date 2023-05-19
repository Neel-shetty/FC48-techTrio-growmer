import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import DText from "../themedComponents/DText";

const Header = () => {
  const router = useRouter();
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>

        <Image
          style={{ height: 44, width: 44, borderRadius: 22, marginLeft: 10 }}
          source={require("../../assets/images/buzz.jpg")}
        />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <DText
          style={{ fontFamily: "PoppinsBold", fontSize: 20, paddingTop: 20 }}
        >
          Buzz lightyear
        </DText>
      </View>
      <View style={{ width: 24 }} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
