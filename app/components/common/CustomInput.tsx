import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import DText from "../themedComponents/DText";
import { Text, useThemeColor } from "../Themed";
import Colors from "../../constants/Colors";
import { layout } from "../../constants/layout";

const CustomInput = ({
  handleBlur,
  handleChange,
  value,
  placeholder,
  type,
  title,
}: {
  handleBlur: any;
  handleChange: any;
  value: string;
  placeholder: string;
  type: string;
  title: string;
}) => {
  const textColor = useThemeColor(
    { dark: Colors.dark.text, light: Colors.light.text },
    "text"
  );
  const styles = StyleSheet.create({
    root: {
      width: layout().widthp,
      marginVertical: 10,
    },
    input: {
      borderBottomWidth: 1,
      borderBottomColor: "#CDD1D0",
      fontFamily: "PoppinsRegular",
      fontSize: 16,
      color: textColor,
    },
  });
  return (
    <View style={styles.root}>
      <DText
        darkColor={Colors.dark.accent}
        lightColor={Colors.light.accent}
        style={{ fontFamily: "PoppinsMedium" }}
      >
        {title}
      </DText>
      <TextInput
        onBlur={handleBlur}
        onChangeText={handleChange}
        value={value}
        placeholder={placeholder}
        style={styles.input}
        // secureTextEntry={type === "password" ? true : false}
      />
    </View>
  );
};

export default CustomInput;
