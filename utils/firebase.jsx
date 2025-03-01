import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
  storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_MEASUREMENT_ID,
  databaseURL: process.env.EXPO_PUBLIC_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);
const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));
const db = getFirestore(app);
const auth = getAuth(app);
const database = getDatabase(app);

export { db, auth, analytics, database };
