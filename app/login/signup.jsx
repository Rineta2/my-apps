import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import React from "react";

import styles from "./style";

import login from "../../assets/images/register/register.png";

import { useRouter } from "expo-router";

export default function signup() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login/signin");
  };

  return (
    <View style={styles.containerSignin}>
      <View style={styles.loginImage}>
        <Image source={login} />
      </View>

      <Text style={styles.textHeader}>Create New Account</Text>

      <View style={styles.formContainerRegister}>
        <Text>Display Name</Text>
        <TextInput placeholder="Display Name" style={styles.textInput} />
      </View>

      <View style={styles.formContainerRegister}>
        <Text>Email</Text>
        <TextInput placeholder="Email" style={styles.textInput} />
      </View>

      <View style={(styles.formContainerRegister, { marginTop: 20 })}>
        <Text>Password</Text>
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.buttonRegister}>
        <Text style={styles.textLogin}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonToLogin} onPress={handleLogin}>
        <Text style={styles.textToRegister}>Already have Account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
