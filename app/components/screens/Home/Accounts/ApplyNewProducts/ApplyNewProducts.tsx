import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { FC } from "react";
import { Alert } from "react-native";
import { db } from "../../../../../firebase";
import { useAuth } from "../../../../../hooks/useAuth";
import { getRandomCardNumber } from "../../../../../utils/getRandomCartNumber";
import Button from "../../../../UI/Button";
import Padding from "../../../../UI/Padding";
import { asyncAlert } from "./asyncAlert";

const ApplyNewProducts: FC = () => {
	const { user } = useAuth();

	const registerHandler = async () => {
		try {
			const currency = await asyncAlert({
				title: "Currency",
				message: "Select account currency",
				buttons: {
					text: "RUB",
					resolveValue: "RUB",
					textSecond: "USD",
					resolveValueSecond: "USD",
				},
			});

			const cartType = await asyncAlert({
				title: "Card type",
				message: "Select card type",
				buttons: {
					text: "Black",
					resolveValue: "Tinkoff Black",
					textSecond: "Platinum",
					resolveValueSecond: "Tinkoff Platinum",
				},
			});

			await addDoc(collection(db, "accounts"), {
				timestamp: serverTimestamp(),
				userId: user?.uid,
				balance: 0,
				cardNumber: getRandomCardNumber(),
				currency,
				name: cartType,
			});
		} catch (error: any) {
			Alert.alert(`Error of creating ${error}`);
		}
	};

	return (
		<Padding style="mt-6">
			<Button onPress={registerHandler} title="Apply for a new product" />
		</Padding>
	);
};

export default ApplyNewProducts;
