import React, { FC } from "react";
import { useData } from "../../../../hooks/useData";

import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
// @ts-ignore
import { StoryContainer as SC } from "react-native-stories-view";

const StoryContainer: FC = () => {
	const { activeStories, setActiveStories } = useData();
	return (
		activeStories && (
			<View>
				<SC
					visible
					enableProgress
					images={activeStories}
					duration={20}
					onComplete={() => setActiveStories(null)}
				/>
				<StatusBar hidden />
			</View>
		)
	);
};

export default StoryContainer;
