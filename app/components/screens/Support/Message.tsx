import React, { FC } from "react";
import { Text, View } from "react-native";
import { useAuth } from "../../../hooks/useAuth";
import { IMessage } from "./types";

const Message: FC<{ message: IMessage }> = ({ message }) => {
	const { user } = useAuth();
	const isMsgByAuthUser = user?.uid === message.userId;
	return (
		<View
			className={`flex-row items-end rounded-lg ${
				isMsgByAuthUser ? "bg-blue-500 self-end" : "bg-gray-200 self-start"
			} my-2 py-2 px-3`}
		>
			<Text className={`${isMsgByAuthUser ? "text-white" : "text-gray-800"}`}>
				{message.text}
			</Text>
			<Text
				className={`${
					isMsgByAuthUser ? "text-white" : "text-gray-800"
				} opacity-70 ml-2`}
				style={{ fontSize: 10 }}
			>
				{message.timestamp}
			</Text>
		</View>
	);
};

export default Message;
