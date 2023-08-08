import React, { FC } from "react";
import { Text, View } from "react-native";

const Percent: FC<{ percent: number }> = ({ percent }) => {
	return (
		<View
			className="w-0 h-0 bg-transparent absolute top-0 right-0 justify-center items-center"
			style={{
				borderStyle: "solid",
				borderRightWidth: 27,
				borderTopWidth: 27,
				borderRightColor: "transparent",
				borderTopColor: "#aaef00",
				transform: [{ rotate: "90deg" }],
			}}
		>
			<Text
				style={{
					fontSize: 10,
					transform: [{ rotate: "-40deg" }],
					top: -34,
					left: 7,
				}}
				className="w-10 h-10 absolute"
			>
				{percent}%
			</Text>
		</View>
	);
};

export default Percent;
