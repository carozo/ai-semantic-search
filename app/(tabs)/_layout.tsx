import { Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const tasks = useQuery(api.tasks.get);
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      {tasks?.map(({ _id, text }) => <Text key={_id}>{text}</Text>)}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="tensor-flow"
        options={{
          title: "TensorFlow",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "hammer" : "hammer-outline"}
              color={color}
            />
          ),
        }}
      /> */}
    </Tabs>
  );
}
