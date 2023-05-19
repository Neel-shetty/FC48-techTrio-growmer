import { Stack } from "expo-router";

export default function leaderboardStack() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="leaderBoard" />
    </Stack>
  );
}
