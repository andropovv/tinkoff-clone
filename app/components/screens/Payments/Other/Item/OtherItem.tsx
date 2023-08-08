import React, { FC } from "react";
import { Pressable, Text } from "react-native";
import { BOX_SHADOW } from "../../../../../styles";
import { IOtherItem } from "../types";
import Icon from "./Icon";

const OtherItem: FC<{ item: IOtherItem }> = ({ item }) => {
	return (
		<Pressable
			className="ml-4 rounded-xl p-2 w-24 h-24 bg-white"
			style={BOX_SHADOW}
		>
			<Icon iconName={item.iconName} />
			<Text className="text-xs" style={{ marginTop: 6 }}>
				{item.title}
			</Text>
		</Pressable>
	);
};

export default OtherItem;
