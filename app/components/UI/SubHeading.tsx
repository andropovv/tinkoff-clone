import React, { FC } from "react";
import { Text } from "react-native";
import Padding from "./Padding";

const SubHeading: FC<{ text: string }> = ({ text }) => {
	return (
		<Padding>
			<Text className="text-xl font-bold text-gray-800">{text}</Text>
		</Padding>
	);
};

export default SubHeading;
