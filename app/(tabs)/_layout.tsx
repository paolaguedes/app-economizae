import { Tabs } from "expo-router";
import React from "react";
import { Platform, View } from "react-native";

import CustomHomeIcon from "@/assets/images/CustomHomeIcon";
import CustomProductIcon from "@/assets/images/CustomProductIcon";
import { HapticTab } from "@/components/HapticTab";
import Icon from "@react-native-vector-icons/fontawesome";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomProfileIcon from "@/assets/images/CustomProfileIcon";

export default function TabLayout() {
  const { bottom } = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#05833E",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: () => (
          <View style={{ flex: 1, backgroundColor: "#fff" }} />
        ),
        tabBarStyle: Platform.select({
          default: {
            height: bottom + 54,
            backgroundColor: "#fff",
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "início",
          tabBarIcon: ({ color }) => 
          <CustomHomeIcon color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="product"
        options={{
          title: "enviar produto",
          tabBarIcon: ({ color }) => (
            <CustomProductIcon color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "perfil",
          tabBarIcon: ({ color }) => (
            <CustomProfileIcon color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
