import React, { FC, ReactNode } from "react";
import { ScrollView, View } from "react-native";

interface ILayout {
	children: ReactNode;
	isScrollView?: boolean;
}

const Layout: FC<ILayout> = ({ children, isScrollView = true }) => {
	return (
		<View>{isScrollView ? <ScrollView>{children}</ScrollView> : children}</View>
	);
};

export default Layout;
