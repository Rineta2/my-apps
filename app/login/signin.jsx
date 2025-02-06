import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import React, { useState } from "react";

import styles from "./style";

import login from "../../assets/images/login/login.png";

import { useRouter } from "expo-router";

import { useSignin } from "../../hooks/auth/login/authLogin";

export default function Signin() {
  const router = useRouter();
  const { formData, setFormData, handleSignin } = useSignin();
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    router.push("/login/signup");
  };

  const handleSigninWithLoading = async () => {
    setLoading(true);
    try {
      await handleSignin();
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.containerSignin}>
        <View style={styles.loginImage}>
          <Image source={login} />
        </View>

        <Text style={styles.textHeader}>Let's Sign You In</Text>
        <Text style={styles.subHeader}>Welcome Back</Text>

        <View style={styles.formContainerLogin}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            style={styles.textInput}
            value={formData.email}
            onChangeText={(text) =>
              setFormData((prev) => ({ ...prev, email: text }))
            }
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.formContainerLogin}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.passwordContainerRegister}>
            <TextInput
              placeholder="Enter your password"
              style={styles.passwordInputRegister}
              secureTextEntry={!formData.showPassword}
              value={formData.password}
              onChangeText={(text) =>
                setFormData((prev) => ({ ...prev, password: text }))
              }
              placeholderTextColor="#999"
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() =>
                setFormData((prev) => ({
                  ...prev,
                  showPassword: !prev.showPassword,
                }))
              }
            >
              <Ionicons
                name={formData.showPassword ? "eye-off" : "eye"}
                size={24}
                color="#666"
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.buttonLogin, loading && { opacity: 0.7 }]}
          onPress={handleSigninWithLoading}
          disabled={loading}
        >
          <Text style={styles.textLogin}>
            {loading ? "Signing in..." : "Sign In"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonToRegister}
          onPress={handleRegister}
        >
          <Text style={styles.textToRegister}>Create Account?</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
