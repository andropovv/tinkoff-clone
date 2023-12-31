import React, { FC } from "react";
import { View } from "react-native";
import { IAccount } from "../types";
import Balance from "./Balance";
import Currency from "./Currency";
import ImageCard from "./ImageCard";

const AccountItem: FC<{ account: IAccount }> = ({ account }) => {
	return (
		<View className="flex-row items-center justify-between mb-7">
			<Currency currency={account.currency} />
			<Balance account={account} />
			<ImageCard account={account} />
		</View>
	);
};

export default AccountItem;
