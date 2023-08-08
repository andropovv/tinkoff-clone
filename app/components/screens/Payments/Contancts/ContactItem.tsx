import React, { FC } from "react";
import { Pressable, Text } from "react-native";
import Avatar from "../../../UI/Avatar";
import { useAccounts } from "../../Home/Accounts/useAccounts";
import { IContact } from "./types";

const ContactItem: FC<{ contact: IContact }> = ({ contact }) => {
	const { accounts } = useAccounts();

	return (
		<Pressable className="ml-4 mr-1 items-center">
			<Avatar name={contact.displayName} size="large" />
			<Text className="mt-1 text-xs">{contact.displayName}</Text>
		</Pressable>
	);
};

export default ContactItem;
