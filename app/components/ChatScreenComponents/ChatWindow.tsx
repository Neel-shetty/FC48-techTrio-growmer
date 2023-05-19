import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import Message from "./Message";
import { Formik } from "formik";
import ChatInput from "./ChatInput";
// import firestore from "firebase/firestore";
// import { db } from "../../config/firebaseConfig";
// import { collection, addDoc, getDocs } from "firebase/firestore";
import firestore from "@react-native-firebase/firestore";
import { useAuth } from "../../context/auth";
import { SendMessageToServer } from "../../api/SendMessageToServer";

export type messagesType = {
  uid: string;
  message: string;
}[];

const ChatWindow = () => {
  const [messages, setMessages] = React.useState<messagesType>([]);
  const ref = React.useRef(FlatList);
  const { user } = useAuth();
  // console.log("🚀 ~ file: ChatWindow.tsx:21 ~ ChatWindow ~ user:", user);

  async function getMessages() {
    firestore().collection("chats").doc("1-2").set({ userId: user.uid });

    firestore()
      .collection("chats")
      .doc("1-2")
      .collection("messages")
      .orderBy("createdAt", "asc")
      // .limitToLast(5)
      .onSnapshot((doc) => {
        // console.log("🚀 ~ file: Chat.tsx:58 ~ getMessages ~ doc:", doc);
        const texts: messagesType = [];
        doc.forEach((message) => {
          texts.push(message.data() as messagesType[0]);
        });
        setMessages(texts);
      });
  }

  React.useEffect(() => {
    getMessages();
  }, []);

  async function sendMessage(message: string) {
    // limit it to 50 recent messages
    SendMessageToServer(message, user.uid);
    await firestore()
      .collection("chats")
      .doc("1-2")
      .collection("messages")
      .add({
        uid: user?.uid,
        message,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList
          ref={ref}
          data={messages}
          renderItem={({ item }) => (
            <Message
              time={new Date()}
              textAlign={user.uid === item.uid ? "right" : "left"}
              message={item.message}
            />
          )}
          onContentSizeChange={() => {
            if (messages.length > 0) ref.current.scrollToEnd();
          }}
        />
      </View>
      <Formik
        initialValues={{ message: "" }}
        onSubmit={(values, { resetForm }) => {
          if (values.message === "") return;
          console.log(values);
          sendMessage(values.message);
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
