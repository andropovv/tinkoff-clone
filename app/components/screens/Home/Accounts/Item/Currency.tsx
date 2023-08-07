import { FontAwesome } from "@expo/vector-icons";
import React, { FC } from "react";
import { View } from "react-native";
import { TypeCurrency } from "../types";

const Currency: FC<{ currency: TypeCurrency }> = ({ currency }) => {
	return (
		<View className="rounded-full bg-blue-500 w-9 h-9 items-center justify-center">
			<View
				className="w-5 h-5 rounded-full items-center justify-center"
				style={{ backgroundColor: "#EDF4FE" }}
			>
				<FontAwesome
					color="#488CF9"
					size={13}
					name={currency === "RUB" ? "ruble" : "usd"}
				/>
			</View>
		</View>
	);
};

export default Currency;
