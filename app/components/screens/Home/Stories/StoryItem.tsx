import React, { FC } from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { useData } from "../../../../hooks/useData";
import { IStory } from "./types";

const StoryItem: FC<{ story: IStory }> = ({ story }) => {
	const { setActiveStories } = useData();

	return (
		<Pressable onPress={() => setActiveStories(story.images)}>
			<View
				className="w-24 h-24 rounded-2xl ml-4 border-solid bg-blue-400"
				style={{ padding: 2, borderWidth: 1 }}
			>
				<ImageBackground
					source={{ uri: story.images[0] }}
					resizeMode="cover"
					className="w-full h-full justify-end"
					imageStyle={{ borderRadius: 12 }}
				>
					<Text className="text-white m-2 text-xs">{story.heading}</Text>
				</ImageBackground>
			</View>
		</Pressable>
	);
};

export default StoryItem;
