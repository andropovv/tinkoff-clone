import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { FC } from "react";
import { Text, View } from "react-native";
import { IService } from "../types";
import Percent from "./Percent";
import { getRandomGradient } from "./getRandomGradient";

const ServiceItem: FC<{ service: IService }> = ({ service }) => {
	return (
		<View className="mb-10">
			<View className="rounded-xl overflow-hidden w-14 h-14 mx-4">
				<LinearGradient
					colors={getRandomGradient()}
					className="w-full h-full items-center justify-center"
				>
					<Percent percent={service.percent} />
					<MaterialIcons name={service.iconName} size={30} color="#fff" />
				</LinearGradient>
			</View>
			<Text className="text-xs text-center" style={{ marginTop: 6 }}>
				{service.title}
			</Text>
		</View>
	);
};

export default ServiceItem;
