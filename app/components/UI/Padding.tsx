import React, { FC, ReactNode } from "react";
import { View } from "react-native";

interface IPadding {
	children: ReactNode;
	className: any;
}

const Padding: FC<IPadding> = ({ children, className = {} }) => {
	return <View className={"px-4" + " " + className}>{children}</View>;
};

export default Padding;
