import React, { FC } from "react";
import { Text, View } from "react-native";
import { IAccount } from "../types";

const Balance: FC<{ account: IAccount }> = ({
	account: { balance, currency, name },
}) => {
	return (
		<View className="w-8/12">
			<Text style={{ fontSize: 15 }}>{name}</Text>
			<Text className="font-bold" style={{ marginTop: 2, fontSize: 15 }}>
				{Intl.NumberFormat(undefined, { currency, style: "currency" }).format(
					balance
				)}
			</Text>
		</View>
	);
};

export default Balance;
