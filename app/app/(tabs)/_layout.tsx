import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import InboxSelected from "../../assets/icons/InboxSelected";
import InboxGray from "../../assets/icons/InboxGray";
import { MaterialIcons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          height: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Message",
          tabBarIcon: ({ color, focused }) =>
            focused ? <InboxSelected /> : <InboxGray />,
        }}
      />
      <Tabs.Screen
        name="(leaderboardStack)"
        options={{
          title: "LeaderBoard",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="leaderboard" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
