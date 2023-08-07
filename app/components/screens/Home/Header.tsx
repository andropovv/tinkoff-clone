import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Avatar from "../../UI/Avatar";
import Loader from "../../UI/Loader";
import Padding from "../../UI/Padding";
import { useProfile } from "../Profile/useProfile";

const Header = () => {
	const { isLoading, name } = useProfile();
	const { navigate } = useNavigation();
	return isLoading ? (
		<Loader />
	) : (
		<Padding style="flex-row items-center">
			<Avatar name={name} />
			<TouchableOpacity
				onPress={() => navigate("Profile")}
				className="flex-row items-end"
			>
				<Text className="text-2xl text-gray-800 font-bold">{name}</Text>
				<Entypo
					name="chevron-small-right"
					size={28}
					className="text-gray-800"
				/>
			</TouchableOpacity>
		</Padding>
	);
};

export default Header;
