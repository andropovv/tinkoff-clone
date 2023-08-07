import React, { FC, ReactNode } from "react";
import { ScrollView, View } from "react-native";

interface ILayout {
	children: ReactNode;
	isScrollView?: boolean;
}

const Layout: FC<ILayout> = ({ children, isScrollView = true }) => {
	return (
		<View className="h-full w-full bg-white pt-10">
			{isScrollView ? <ScrollView>{children}</ScrollView> : children}
		</View>
	);
};

export default Layout;
