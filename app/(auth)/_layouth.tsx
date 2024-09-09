import { View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack, useRouter } from "expo-router";
import HeaderNavigation from "@/core/HeaderNavigation";

export default function AuthRouterLayout() {
  const router = useRouter();
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
            headerLeft: () => (
              <Button title="Back" onPress={() => router.back()} />
            ),
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerLeft: () => (
              <Button title="Back" onPress={() => router.back()} />
            ),
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}
