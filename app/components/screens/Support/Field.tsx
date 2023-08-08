import { MaterialCommunityIcons } from "@expo/vector-icons";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { db } from "../../../firebase";
import { useAuth } from "../../../hooks/useAuth";

const Field = () => {
	const { user } = useAuth();
	const [message, setMessage] = useState("");

	const handleSendMessage = async () => {
		try {
			await addDoc(collection(db, "messages"), {
				timestamp: serverTimestamp(),
				userId: user?.uid,
				text: message,
			});
		} catch (error) {
			{
				{
				}
			}
		} finally {
			setMessage("");
		}
	};
	return (
		<View className="mt-3 flex-row items-center justify-between py-1">
			<TextInput
				placeholder="Enter your message"
				onChangeText={setMessage}
				value={message}
				autoCapitalize="none"
				className="bg-gray-100 p-3 w-5/6 h-10 rounded-2xl"
			/>
			<Pressable onPress={handleSendMessage}>
				<MaterialCommunityIcons
					name="send-circle-outline"
					size={42}
					style={{ color: "#4F7FFA" }}
				/>
			</Pressable>
		</View>
	);
};

export default Field;
