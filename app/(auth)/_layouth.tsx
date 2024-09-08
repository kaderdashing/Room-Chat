import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";

export default function AuthRouterLayout() {
  const { isSignedIn } = useAuth();
  if (isSignedIn) {
    return <Redirect href={"/(call)/"} />;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            title: "signe-in page",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerBackButtonMenuEnabled: true,
            title: "create new account",
            headerShown: true,
            headerBackTitle: "sign-in ",
            headerStyle: { backgroundColor: "#5F5DEC" },
            headerTintColor: "white",
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}
