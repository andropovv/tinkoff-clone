import React, { FC } from "react";
import { Text, View } from "react-native";
import { BOX_SHADOW } from "../../../../styles";
import { ICurrency } from "./types";

const CurrencyItem: FC<{ currency: ICurrency }> = ({ currency }) => {
	return (
		<View className="text-xs w-1/3 flex-row justify-center" style={BOX_SHADOW}>
			<Text className="text-gray-400 mr-1">{currency.name}</Text>
			<Text className="text-gray-800">{currency.value}</Text>
		</View>
	);
};

export default CurrencyItem;
