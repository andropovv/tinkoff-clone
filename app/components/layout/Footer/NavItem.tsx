import { AntDesign } from "@expo/vector-icons";
import React, { FC } from "react";
import { Pressable, Text } from "react-native";
import { TypeRootStackParamList } from "../../../navigation/types";
import { IFooterItem } from "./typex";

interface INavItem {
	item: IFooterItem;
	navigate: (screen: keyof TypeRootStackParamList) => void;
	currentRoute?: string;
}

const NavItem: FC<INavItem> = ({
	item: { iconName, title },
	navigate,
	currentRoute,
}) => {
	const isActive = title === currentRoute;

	const iconStyle = isActive
		? { color: "#2560F7", fontSize: 20 }
		: { color: "#A59FA2", fontSize: 20 };

	const titleStyle = isActive
		? { color: "#2560F7", fontSize: 12, marginTop: 1 }
		: { color: "#A59FA2", fontSize: 12, marginTop: 1 };

	return (
		<Pressable
			className="items-center"
			style={{ width: "20%" }}
			onPress={() => navigate(title)}
		>
			<AntDesign name={iconName} style={iconStyle} />
			<Text>{title}</Text>
		</Pressable>
	);
};

export default NavItem;
