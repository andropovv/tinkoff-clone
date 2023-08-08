import React from "react";
import Heading from "../../UI/Heading";
import Layout from "../../layout/Layout";
import Contacts from "./Contancts/Contacts";
import Other from "./Other/Other";

const Paymets = () => {
	return (
		<Layout>
			<Heading text="Payments" />
			<Contacts />
			<Other />
		</Layout>
	);
};

export default Paymets;
