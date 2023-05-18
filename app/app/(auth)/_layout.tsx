import { Stack } from "expo-router";

export function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen options={{ headerShown: false }}  name="sign-in" />
    </Stack>
  );
}
