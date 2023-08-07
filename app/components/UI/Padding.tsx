import React, { FC, ReactNode } from "react";
import { View } from "react-native";

interface IPadding {
	children: ReactNode;
	style?: string;
}

const Padding: FC<IPadding> = ({ children, style = "" }) => {
	return <View className={`px-4 ${style}`}>{children}</View>;
};

export default Padding;
