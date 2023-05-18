import { Button, StyleSheet, useColorScheme } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View, useThemeColor } from "../../components/Themed";
import { useAuth } from "../../context/auth";
import Colors from "../../constants/Colors";
import Header from "../../components/HomeScreenComponents/Header";
import ChatList from "../../components/HomeScreenComponents/ChatList";
import { StatusBar } from "expo-status-bar";

export default function TabOneScreen() {
  const { signOut } = useAuth();
  const theme = useColorScheme();
  console.log("🚀 ~ file: index.tsx:14 ~ TabOneScreen ~ theme:", theme);

  const backgroundColor = useThemeColor(
    { light: Colors.light.HomeBackground, dark: Colors.dark.HomeBackground },
    "background"
  );

  const statusBarBgColor = useThemeColor(
    { light: Colors.light.HomeBackground, dark: Colors.dark.HomeBackground },
    "background"
  );

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <StatusBar
        style={theme ? "light" : "dark"}
        backgroundColor={statusBarBgColor}
      />
      <View style={{ flex: 2, backgroundColor: backgroundColor }}>
        <Header />
      </View>
      <View style={{ flex: 8, backgroundColor }}>
        <ChatList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
