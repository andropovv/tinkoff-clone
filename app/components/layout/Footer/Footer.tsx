import React, { FC } from "react";
import { View } from "react-native";
import { TypeRootStackParamList } from "../../../navigation/types";
import NavItem from "./NavItem";
import { menu } from "./menu";

interface IFooter {
	navigate: (screen: keyof TypeRootStackParamList) => void;
	currentRoute?: string;
}

const Footer: FC<IFooter> = ({ navigate, currentRoute }) => {
	return (
		<View
			className="flex-row justify-between items-center w-full bg-gray-50 px-4  pb-5 pt-2"
			style={{ borderTopColor: "#E1E1E1", borderTopWidth: 1 }}
		>
			{menu.map(item => (
				<NavItem
					key={item.title}
					item={item}
					navigate={navigate}
					currentRoute={currentRoute}
				/>
			))}
		</View>
	);
};

export default Footer;
