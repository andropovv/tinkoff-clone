import React from "react";
import Layout from "../../layout/Layout";
import Accounts from "./Accounts/Accounts";
import ApplyNewProducts from "./Accounts/ApplyNewProducts/ApplyNewProducts";
import Header from "./Header";
import Stories from "./Stories/Stories";

const Home = () => {
	return (
		<Layout>
			<Header />
			<Stories />
			<Accounts />
			<ApplyNewProducts />
		</Layout>
	);
};

export default Home;
