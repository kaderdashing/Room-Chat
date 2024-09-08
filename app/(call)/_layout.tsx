import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, Tabs } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "@clerk/clerk-expo";

export default function RoomRouter() {
  const { isSignedIn } = useAuth();
  if (!isSignedIn) {
    return <Redirect href={"/(auth)/sign-in"} />;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        screenOptions={({ route }) => ({
          header: () => null,
          tabBarStyle: {
            display: route.name === "[id]" ? "none" : "flex",
          },
        })}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "All Room",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="meeting-room" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            title: "My Account",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="account-circle" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
