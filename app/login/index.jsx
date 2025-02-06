import { View, Text, Image } from "react-native";

import { TouchableOpacity } from "react-native";

import React from "react";

import img from "../../assets/images/home/home.png";

import styles from "./style";

import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login/signin");
  };

  return (
    <View>
      <View style={styles.container}>
        <Image source={img} style={styles.img} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>Stay on Track, Stay Healthy</Text>

        <Text style={styles.desc}>
          Track your meds, take your controls of your health Stay consistent
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.loginBtn}>Continue</Text>
        </TouchableOpacity>

        <Text style={styles.note}>
          Note: By Clicking Continue button, you will agree to our terms and
          conditions
        </Text>
      </View>
    </View>
  );
}
