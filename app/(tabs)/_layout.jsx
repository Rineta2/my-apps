import React from "react";

import { Tabs, useRouter } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";

import Ionicons from "@expo/vector-icons/Ionicons";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "@/utils/firebase";

export default function TabLayout() {
  const router = useRouter();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      router.push("/");
    } else {
      router.push("/login");
    }
  });

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="AddNew"
        options={{
          tabBarLabel: "Add New",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
