import React, { FC } from "react";
import { Text, View } from "react-native";

interface IAvatar {
	name?: string | null;
	size?: "small" | "large";
}

const Avatar: FC<IAvatar> = ({ name, size = "small" }) => {
	return (
		<View>
			<Text>Avatar</Text>
		</View>
	);
};

export default Avatar;
