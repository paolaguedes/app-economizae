import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Platform } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  const [loaded] = useFonts({
    FunnelDisplay: require("../assets/fonts/FunnelDisplay-Regular.ttf"),
    FunnelDisplayMedium: require("../assets/fonts/FunnelDisplay-Medium.ttf"),
    FunnelDisplaySemiBold: require("../assets/fonts/FunnelDisplay-SemiBold.ttf"),
    FunnelDisplayBold: require("../assets/fonts/FunnelDisplay-Bold.ttf"),
  });

  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setBackgroundColorAsync("white");
    }
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="dark" backgroundColor="#ffffff" translucent={false} />
    </ThemeProvider>
  );
}
