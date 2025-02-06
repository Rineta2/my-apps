import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import React from "react";

import styles from "./style";

import login from "../../assets/images/login/login.png";

import { useRouter } from "expo-router";

export default function signin() {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/login/signup");
  };

  return (
    <View style={styles.containerSignin}>
      <View style={styles.loginImage}>
        <Image source={login} />
      </View>

      <Text style={styles.textHeader}>Let's Sign You In</Text>
      <Text style={styles.subHeader}>Welcome Back</Text>
      <Text style={styles.subHeader}>You've been missed!</Text>

      <View style={styles.formContainerLogin}>
        <Text>Email</Text>
        <TextInput placeholder="Email" style={styles.textInput} />
      </View>

      <View style={(styles.formContainerLogin, { marginTop: 20 })}>
        <Text>Password</Text>
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.buttonLogin}>
        <Text style={styles.textLogin}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonToRegister}
        onPress={handleRegister}
      >
        <Text style={styles.textToRegister}>Create Account?</Text>
      </TouchableOpacity>
    </View>
  );
}
