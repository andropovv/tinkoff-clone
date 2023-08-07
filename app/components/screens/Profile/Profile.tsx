import React from "react";
import { Text, View } from "react-native";
import { useAuth } from "../../../hooks/useAuth";
import Button from "../../UI/Button";
import Field from "../../UI/Field";
import Heading from "../../UI/Heading";
import Loader from "../../UI/Loader";
import Padding from "../../UI/Padding";
import Layout from "../../layout/Layout";
import { useProfile } from "./useProfile";
import { useUpdateProfile } from "./useUpdateProfile";

const Profile = () => {
	const { logout } = useAuth();

	const { isLoading: isProfilLoading, name, setName, profile } = useProfile();
	const { isLoading, isSuccess, updateProfile } = useUpdateProfile(
		name,
		profile.docId
	);

	return (
		<Layout>
			<Heading text="Profile" isCenter={true} />
			<Padding>
				{isSuccess && (
					<View className="bg-green-500 p-3 rounded-lg">
						<Text className="text-white text-center">
							Profie updated successfully
						</Text>
					</View>
				)}
				{isProfilLoading || isLoading ? (
					<Loader />
				) : (
					<>
						<Field onChange={setName} value={name} placeholder="Enter name" />
						<Button onPress={updateProfile} title="Update profile" />
						<Button
							onPress={logout}
							title="Logout"
							colors={["bg-gray-200", "#D6D8DB"]}
						/>
					</>
				)}
			</Padding>
		</Layout>
	);
};

export default Profile;
