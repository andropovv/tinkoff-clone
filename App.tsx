import React from "react";
import { StyleSheet } from "react-native";
import Navigation from "./app/navigation/Navigation";
import { AuthProvider } from "./app/providers/AuthProvider";
export default function App() {
	return (
		<AuthProvider>
			<Navigation />
		</AuthProvider>
	);
}

const styles = StyleSheet.create({});
