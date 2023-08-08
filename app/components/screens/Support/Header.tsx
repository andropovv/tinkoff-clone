import React from "react";
import { Image, Text, View } from "react-native";

const Header = () => {
	return (
		<View className="flex-row items-center py-1 mb-2">
			<Image
				source={require("../../../../assets/logo.png")}
				className="mr-2 w-11 h-11"
			/>
			<View>
				<Text className="text-sm text-gray-800 font-medium">Support</Text>
				<Text className="text-xs text-gray-500"> We are there 24/7</Text>
			</View>
		</View>
	);
};

export default Header;
