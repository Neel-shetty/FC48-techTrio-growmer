import { FlatList, StyleSheet, useColorScheme } from "react-native";

import EditScreenInfo from "../../../components/EditScreenInfo";
import { Text, View, useThemeColor } from "../../../components/Themed";
import React from "react";
import { GetLeaderBoard } from "../../../api/leaderBoard";
import DText from "../../../components/themedComponents/DText";
import Colors from "../../../constants/Colors";
import { layout } from "../../../constants/layout";

export default function TabTwoScreen() {
  const [leaderBoard, setLeaderBoard] = React.useState([]);
  console.log(
    "🚀 ~ file: leaderBoard.tsx:12 ~ TabTwoScreen ~ leaderBoard:",
    leaderBoard
  );

  React.useEffect(() => {
    async function getLeaderBoard() {
      const res = await GetLeaderBoard();
      console.log("🚀 ~ file: index.tsx:14 ~ TabOneScreen ~ res", res);
      setLeaderBoard(res);
    }
    getLeaderBoard();
  }, []);

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
    <View style={[styles.container, { backgroundColor }]}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 2,
          backgroundColor,
        }}
      >
        <DText
          style={{
            fontSize: 20,
            fontFamily: "PoppinsSemiBold",
            backgroundColor,
          }}
          lightColor="white"
        >
          LeaderBoard
        </DText>
      </View>
      <View
        style={{
          flex: 8,
          backgroundColor: "white",
          width: layout().width,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
        <FlatList
          data={leaderBoard}
          renderItem={({ item }) => {
            return (
              <View style={{ width: "100%", backgroundColor: "pink" }}>
                <DText lightColor="black">test</DText>
              </View>
            );
          }}
        />
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
