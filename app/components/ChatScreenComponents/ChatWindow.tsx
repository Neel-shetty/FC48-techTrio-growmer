import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import Message from "./Message";
import { Formik } from "formik";
import ChatInput from "./ChatInput";

const ChatWindow = () => {
  return (
    <View>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={({ item }) => (
          <Message time={new Date()} textAlign="left" message="hello!" />
        )}
      />

      <Message time={new Date()} textAlign="right" message="hello!" />
      <Formik
        initialValues={{ message: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          // <View>
          <ChatInput
            handleChange={handleChange("message")}
            handleBlur={handleBlur("message")}
            value={values.message}
            onPress={handleSubmit}
          />
          // </View>
        )}
      </Formik>
    </View>
  );
};

export default ChatWindow;

const styles = StyleSheet.create({});
