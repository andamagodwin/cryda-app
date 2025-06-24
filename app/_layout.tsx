import "../global.css";
import { Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, ActivityIndicator } from "react-native";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

export default function Layout() {
  const router = useRouter();
  const segments = useSegments();
  const { session, loading } = useAuth();

  const inAuthGroup = segments[0] === "(auth)";

  useEffect(() => {
    if (loading) return;

    if (!session && !inAuthGroup) {
      router.replace("/login");
    } else if (session && inAuthGroup) {
      router.replace("/"); // Redirect logged-in users away from login
    }
  }, [session, loading, segments]);
  

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-primary">
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
