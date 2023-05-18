// import { StyleSheet, View } from "react-native";
// import React from "react";
// import DText from "../../../../components/themedComponents/DText";
// import { Text } from "../../../../components/Themed";

// const Chat = () => {
//   return (
//     <View>
//       <DText>Chat</DText>
//       <Text>testknvladf</Text>
//     </View>
//   );
// };

// export default Chat;

// const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../../../components/ChatScreenComponents/Header";
import ChatWindow from "../../../../components/ChatScreenComponents/ChatWindow";
import { useThemeColor } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";

const Chat = () => {
  const backgroundColor = useThemeColor(
    {
      light: Colors.light.background,
      dark: Colors.dark.background,
    },
    "background"
  );
  return (
    <View style={{ backgroundColor, flex: 1 }}>
      <Header />
      <ChatWindow />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
