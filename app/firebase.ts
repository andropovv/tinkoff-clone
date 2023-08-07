import { initializeApp } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAwAFFkw3-KBhM6PzyN4ggGqpNbBdteQ5I",
	authDomain: "tinkoff-61347.firebaseapp.com",
	projectId: "tinkoff-61347",
	storageBucket: "tinkoff-61347.appspot.com",
	messagingSenderId: "486412799125",
	appId: "1:486412799125:web:bc855b5d5ba419609e9f9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) =>
	createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();
