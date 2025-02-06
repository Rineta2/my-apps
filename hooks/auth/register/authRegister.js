import { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";

import { auth, db } from "../../../utils/firebase";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useRouter } from "expo-router";

import Toast from "react-native-toast-message";

// Function to create user in Firebase and Firestore
export const signUp = async (displayName, email, password) => {
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Store additional user data in Firestore
    await setDoc(
      doc(
        db,
        process.env.EXPO_PUBLIC_USERS_COLLECTION,
        userCredential.user.uid
      ),
      {
        displayName: displayName,
        email: email,
        createdAt: new Date().toISOString(),
      }
    );

    // Store user data in AsyncStorage
    await AsyncStorage.setItem(
      "userData",
      JSON.stringify({
        uid: userCredential.user.uid,
        email: email,
        displayName: displayName,
      })
    );

    return userCredential;
  } catch (error) {
    throw error; // Re-throw error untuk ditangkap oleh handleSignup
  }
};

// Custom hook untuk signup yang lebih optimal
export const useSignup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    displayName: "",
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

  const handleSignup = async () => {
    const { email, password, displayName } = formData;

    try {
      if (!email || !password || !displayName) {
        showToast("error", "Please fill all fields");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(
        doc(
          db,
          process.env.EXPO_PUBLIC_USERS_COLLECTION,
          userCredential.user.uid
        ),
        {
          displayName,
          email,
          createdAt: new Date().toISOString(),
        }
      );

      await AsyncStorage.setItem(
        "userData",
        JSON.stringify({
          uid: userCredential.user.uid,
          email,
          displayName,
        })
      );

      showToast("success", "Account created successfully!");
      setTimeout(() => router.push("/login/signin"), 2000);
    } catch (error) {
      const errorMessages = {
        "auth/email-already-in-use": "Email already registered",
        "auth/invalid-email": "Invalid email format",
        "auth/weak-password": "Password should be at least 6 characters",
        "auth/network-request-failed":
          "Network error. Please check your connection",
      };

      showToast("error", errorMessages[error.code] || "Registration failed");
    }
  };

  return {
    formData,
    setFormData,
    handleSignup,
  };
};
