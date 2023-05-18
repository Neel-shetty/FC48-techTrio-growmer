import {
  StyleSheet,
  View,
  TouchableOpacity,
  useColorScheme,
  Image,
} from "react-native";
import React from "react";
import { Text, useThemeColor } from "../Themed";
import Colors from "../../constants/Colors";
import SearchWhite from "../../assets/icons/SearchWhite";
import SearchBlack from "../../assets/icons/SearchBlack";
import DText from "../themedComponents/DText";
import { layout } from "../../constants/layout";

const Header = () => {
  const theme = useColorScheme();
  const backgroundColor = useThemeColor(
    { light: Colors.light.HomeBackground, dark: Colors.dark.HomeBackground },
    "background"
  );
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        width: layout().widthp,
        // paddingTop: 20,
        alignItems: "center",
      }}
    >
      <TouchableOpacity>
        <View
          style={{
            height: 44,
            width: 44,
            borderColor: "#363F3B",
            borderWidth: 1,
            borderRadius: 22,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {theme === "light" ? <SearchBlack /> : <SearchWhite />}
        </View>
      </TouchableOpacity>
      <View>
        <Text
          lightColor={Colors.dark.text}
          darkColor={Colors.light.text}
          style={{ fontFamily: "PoppinsBold", fontSize: 20 }}
        >
          Home
        </Text>
      </View>
      <View>
        <Image
          style={{ height: 44, width: 44, borderRadius: 22 }}
          source={require("../../assets/images/pfp.jpeg")}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
