import React, { FC } from "react";
import { Text } from "react-native";
import Padding from "./Padding";

const Heading: FC<{ text: string; isCenter?: boolean }> = ({
	text,
	isCenter = false,
}) => {
	return (
		<Padding>
			<Text
				className={`text-2xl font-bold to-gray-800 ${
					isCenter && "text-center"
				}`}
			>
				{text}
			</Text>
		</Padding>
	);
};

export default Heading;
