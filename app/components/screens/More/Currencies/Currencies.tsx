import React from "react";
import { View } from "react-native";
import { BOX_SHADOW } from "../../../../styles";
import Loader from "../../../UI/Loader";
import CurrencyItem from "./CurrencyItem";
import { useCurrencies } from "./useCurrency";

const Currencies = () => {
	const { currencies, isLoading } = useCurrencies();
	return (
		<View
			className="mt-5 flex-row rounded-2xl bg-white py-3 justify-center"
			style={BOX_SHADOW}
		>
			{isLoading ? (
				<Loader />
			) : (
				currencies.map(cur => <CurrencyItem key={cur.name} currency={cur} />)
			)}
		</View>
	);
};

export default Currencies;
