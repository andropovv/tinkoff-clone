import React from "react";
import { ScrollView, View } from "react-native";
import Loader from "../../../UI/Loader";
import SubHeading from "../../../UI/SubHeading";
import ContactItem from "./ContactItem";
import { useContacts } from "./useContacts";

const Contacts = () => {
	const { contacts, isLoading } = useContacts();

	return (
		<View className="my-8">
			<SubHeading text="Phone transfers" />
			{isLoading ? (
				<Loader />
			) : (
				<ScrollView
					className="mt-5"
					showsHorizontalScrollIndicator={false}
					horizontal
				>
					{contacts.map(contact => (
						<ContactItem contact={contact} key={contact._id} />
					))}
				</ScrollView>
			)}
		</View>
	);
};

export default Contacts;
