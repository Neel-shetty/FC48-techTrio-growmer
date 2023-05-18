import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const ChatInput = ({
  handleBlur,
  handleChange,
  value,
  onPress,
}: {
  handleBlur: any;
  handleChange: any;
  value: string;
  onPress: () => void;
}) => {
  const styles = StyleSheet.create({
    root: {},
    input: {
      fontFamily: "PoppinsRegular",
      fontSize: 16,
      height: 90,
    },
  });
  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        onChangeText={handleChange}
        onBlur={handleBlur}
        value={value}
      />
    </View>
  );
};

export default ChatInput;
