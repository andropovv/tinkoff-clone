import React from "react";
import { ScrollView, View } from "react-native";
import SubHeading from "../../../UI/SubHeading";
import OtherItem from "./Item/OtherItem";
import { otherItems } from "./data";

const Other = () => {
	return (
		<View>
			<SubHeading text="Important transfers" />
			<ScrollView
				className="py-5"
				showsHorizontalScrollIndicator={false}
				horizontal
			>
				{otherItems.map(item => (
					<OtherItem key={item.title} item={item} />
				))}
			</ScrollView>
		</View>
	);
};

export default Other;
