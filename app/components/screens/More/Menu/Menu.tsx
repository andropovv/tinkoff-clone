import React from "react";
import { View } from "react-native";
import MenuItem from "./MenuItem";
import { menu } from "./list";

const Menu = () => {
	return (
		<View>
			{menu.map(item => (
				<MenuItem key={item.title} item={item} />
			))}
		</View>
	);
};

export default Menu;
