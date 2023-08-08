import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Url } from "./API";
import { ICurrency } from "./types";
export const useCurrencies = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [currencies, setCurrencies] = useState<ICurrency[]>([]);

	const fetchData = async () => {
		try {
			const responce = await fetch(`${Url}&base_currency=RUB`);
			const result = await responce.json();

			setCurrencies([
				{
					name: "USD",
					value: (1 / result.data.USD).toFixed(2),
				},
				{
					name: "EUR",
					value: (1 / result.data.EUR).toFixed(2),
				},
				{
					name: "CAD",
					value: (1 / result.data.CAD).toFixed(2),
				},
			]);
		} catch (error: any) {
			Alert.alert("Fetch currencies", error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	});

	return { isLoading, currencies };
};
