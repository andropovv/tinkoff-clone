import React from "react";
import { Text } from "react-native";
import Heading from "../../UI/Heading";
import Padding from "../../UI/Padding";
import Layout from "../../layout/Layout";
import Currencies from "./Currencies/Currencies";
import Menu from "./Menu/Menu";

const More = () => {
	return (
		<Layout>
			<Heading text="More" />
			<Padding>
				<Currencies />
				<Menu />
				<Text className="text-center text-gray-500 opacity-50 my-4">
					Version 6.1.3
				</Text>
			</Padding>
		</Layout>
	);
};

export default More;
