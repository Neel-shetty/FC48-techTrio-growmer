import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import Message from "./Message";
import { Formik } from "formik";
import ChatInput from "./ChatInput";

const ChatWindow = () => {
  const [messages, setMessages] = React.useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 23,
  ]);
  const ref = React.useRef(FlatList);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList
          ref={ref}
          data={messages}
          renderItem={({ item }) => (
            <Message time={new Date()} textAlign="left" message="hello!" />
          )}
          onContentSizeChange={() => ref.current.scrollToEnd()}
        />
      </View>
      <Formik
        initialValues={{ message: "" }}
        onSubmit={(values, { resetForm }) => {
          if (values.message === "") return;
          console.log(values);
          resetForm();
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <ChatInput
            handleChange={handleChange("message")}
            handleBlur={handleBlur("message")}
            value={values.message}
            onPress={handleSubmit}
          />
        )}
      </Formik>
    </View>
  );
};

export default ChatWindow;

const styles = StyleSheet.create({});
