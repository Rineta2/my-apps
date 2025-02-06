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

import login from "../../assets/images/register/register.png";

import { useRouter } from "expo-router";

import { useSignup } from "../../hooks/auth/register/authRegister";

export default function Signup() {
  const router = useRouter();
  const { formData, setFormData, handleSignup } = useSignup();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    router.push("/login/signin");
  };

  const handleSignupWithLoading = async () => {
    setLoading(true);
    try {
      await handleSignup();
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#fff" }}
    >
      <View style={styles.containerSignin}>
        <View style={styles.loginImage}>
          <Image source={login} />
        </View>

        <Text style={styles.textHeader}>Create Account</Text>

        <View style={styles.formContainerRegister}>
          <Text style={styles.inputLabel}>Display Name</Text>
          <TextInput
            placeholder="Enter your name"
            style={styles.textInput}
            value={formData.displayName}
            onChangeText={(text) =>
              setFormData((prev) => ({ ...prev, displayName: text }))
            }
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.formContainerRegister}>
          <Text style={styles.inputLabel}>Email Address</Text>
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

        <View style={styles.formContainerRegister}>
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
          style={[styles.buttonRegister, loading && { opacity: 0.7 }]}
          onPress={handleSignupWithLoading}
          disabled={loading}
        >
          <Text style={styles.textLogin}>
            {loading ? "Creating Account..." : "Create Account"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonToLogin} onPress={handleLogin}>
          <Text style={styles.textToRegisterRegister}>
            Already have an account? Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
