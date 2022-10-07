import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAdJ-erTESPkPyvC1juPC3OxA19fMoOJDw",
  authDomain: "twitter-clone-2a24c.firebaseapp.com",
  projectId: "twitter-clone-2a24c",
  storageBucket: "twitter-clone-2a24c.appspot.com",
  messagingSenderId: "766967871858",
  appId: "1:766967871858:web:fcca87c5856cc8d0b705eb",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
