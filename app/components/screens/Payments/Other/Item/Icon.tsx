import { AntDesign } from "@expo/vector-icons";
import React, { FC } from "react";
import { View } from "react-native";
import { IFooterItem } from "../../../../layout/Footer/typex";

interface IIcon extends Pick<IFooterItem, "iconName"> {}

const Icon: FC<IIcon> = ({ iconName }) => {
	return (
		<View className="w-8 h-8 rounded-full bg-blue-500 items-center justify-center">
			<AntDesign size={19} name={iconName} color="#EDF4FE" />
		</View>
	);
};

export default Icon;
