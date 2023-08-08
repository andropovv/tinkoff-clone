import {
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	updateDoc,
	where,
} from "firebase/firestore";
import { Alert } from "react-native";
import { db } from "../../../../firebase";
import { IAccount } from "../../Home/Accounts/types";

export const handleTransfer = async (
	fromAccount: IAccount,
	cardNumber: string
) => {
	Alert.prompt("Sum transfer", "Enter the transfer amount:", async sum => {
		try {
			let accountToId = "";
			let currentToBalance = 0;

			const querySnapshot = await getDocs(
				query(collection(db, "accounts"), where("cardNumber", "==", cardNumber))
			);

			querySnapshot.forEach(doc => {
				accountToId = doc.id;
			});

			const docRefTo = doc(db, "accounts", accountToId);
			const docSnapTo = await getDoc(docRefTo);

			if (docSnapTo.exists()) {
				currentToBalance = docSnapTo.data().balance;
			} else {
				Alert.alert("The card was not found");
				return;
			}

			await updateDoc(docRefTo, {
				balance: currentToBalance + Number(sum),
			});

			const docRefFrom = doc(db, "accounts", fromAccount._id);

			await updateDoc(docRefFrom, {
				balance: fromAccount.balance - Number(sum),
			});
		} catch (error: any) {
			Alert.alert("Error transfer", error);
		}
	});
};
