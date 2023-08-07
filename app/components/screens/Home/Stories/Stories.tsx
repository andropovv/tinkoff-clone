import React from "react";
import { ScrollView, View } from "react-native";
import Loader from "../../../UI/Loader";
import StoryItem from "./StoryItem";
import { useStories } from "./useStories";

const Stories = () => {
	const { stories, isLoading } = useStories();

	return (
		<View className="my-7">
			{isLoading ? (
				<Loader />
			) : (
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{stories.map(story => (
						<StoryItem story={story} key={story._id} />
					))}
				</ScrollView>
			)}
		</View>
	);
};

export default Stories;
