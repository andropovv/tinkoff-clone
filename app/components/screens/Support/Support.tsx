import React from "react";
import { ScrollView } from "react-native";
import Padding from "../../UI/Padding";
import Layout from "../../layout/Layout";
import Field from "./Field";
import Header from "./Header";
import Message from "./Message";
import { useMessages } from "./useMessages";

const Support = () => {
	const { messages, isLoading } = useMessages();
	return (
		<Layout isScrollView={false}>
			<Padding>
				<Header />
				<ScrollView style={{ height: "83%" }}>
					{messages.map(message => (
						<Message key={message._id} message={message} />
					))}
				</ScrollView>
				<Field />
			</Padding>
		</Layout>
	);
};

export default Support;
