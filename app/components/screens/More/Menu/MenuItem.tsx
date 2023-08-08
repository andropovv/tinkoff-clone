import { MaterialIcons } from "@expo/vector-icons";
import React, { FC } from "react";
import { Linking, Pressable, Text, View } from "react-native";
import { BOX_SHADOW } from "../../../../styles";
import { IMoreItem } from "./types";

const MenuItem: FC<{ item: IMoreItem }> = ({ item }) => {
	return (
		<Pressable
			className="mt-4 flex-row bg-white p-4 rounded-2xl justify-between"
			style={BOX_SHADOW}
			onPress={() => Linking.openURL(item.link)}
		>
			<View className="w-10/12">
				<Text className="text-xl text-gray-800 font-bold">{item.title}</Text>
				<Text className="mt-1 text-gray-500 opacity-90">
					{item.description}
				</Text>
			</View>
			<View className="rounded-full bg-blue-500 w-9 h-9 items-center justify-center">
				<MaterialIcons name={item.iconName} size={22} color="#edf4fe" />
			</View>
		</Pressable>
	);
};

export default MenuItem;
