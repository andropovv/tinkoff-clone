import React, { Fragment } from "react";
import { Text, View } from "react-native";
import Loader from "../../../UI/Loader";
import Padding from "../../../UI/Padding";
import AccountItem from "./Item/AccountItem";
import { useAccounts } from "./useAccounts";

const Accounts = () => {
	const { accounts, isLoading } = useAccounts();

	return (
		<Padding>
			{isLoading ? (
				<Loader />
			) : accounts.length ? (
				accounts.map((account, i) => (
					<Fragment key={account._id}>
						<AccountItem account={account} />
						{i + 1 !== accounts.length && (
							<View
								style={{
									borderBlockColor: "#E0E1E2",
									borderBottomWidth: 1,
									marginBottom: 24,
								}}
							/>
						)}
					</Fragment>
				))
			) : (
				<Text>You don't have any cards</Text>
			)}
		</Padding>
	);
};

export default Accounts;
