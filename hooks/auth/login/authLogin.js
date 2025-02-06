import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "expo-router";
import { useState } from "react";
import Toast from "react-native-toast-message";
import { auth } from "../../../utils/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Fungsi untuk sign in
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Simpan data user ke AsyncStorage
    await AsyncStorage.setItem(
      "userData",
      JSON.stringify({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userCredential.user.displayName,
      })
    );

    return userCredential;
  } catch (error) {
    throw error;
  }
};

// Custom hook untuk signin
export const useSignin = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const showToast = (type, message) => {
    Toast.show({
      type,
      text1: message,
      visibilityTime: type === "error" ? 3000 : 2000,
      position: "top",
      bottomOffset: 40,
      containerStyle: {
        backgroundColor: type === "error" ? "#FF6B6B" : "#4CAF50",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 25,
      },
      text1Style: {
        fontSize: 16,
        fontWeight: "500",
        color: "#fff",
      },
    });
  };

  const handleSignin = async () => {
    const { email, password } = formData;

    try {
      if (!email || !password) {
        showToast("error", "Please fill all fields");
        return;
      }

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Store user data in AsyncStorage
      await AsyncStorage.setItem(
        "userData",
        JSON.stringify({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          displayName: userCredential.user.displayName,
        })
      );

      showToast("success", "Login successful!");
      setTimeout(() => router.push("/"), 2000);
    } catch (error) {
      const errorMessages = {
        "auth/user-not-found": "User not found",
        "auth/wrong-password": "Invalid password",
        "auth/invalid-email": "Invalid email format",
        "auth/network-request-failed":
          "Network error. Please check your connection",
      };

      showToast("error", errorMessages[error.code] || "Login failed");
    }
  };

  return {
    formData,
    setFormData,
    handleSignin,
  };
};
