import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useAuth } from "../../../hooks/useAuth";
import Button from "../../UI/Button";
import Field from "../../UI/Field";
import Loader from "../../UI/Loader";

interface IData {
	email: string;
	password: string;
}

const Auth = () => {
	const { isLoading, login, register } = useAuth();
	const [data, setData] = useState<IData>({} as IData);
	const [isReg, setIsReg] = useState(false);

	const AuthHandler = async () => {
		const { email, password } = data;

		if (isReg) await register(email, password);
		else await login(email, password);

		setData({} as IData);
	};

	return (
		<View className="h-full w-full bg-white pt-16">
			<View className="mx-5 justify-center items-center h-full">
				<View className="w-9/12">
					<Text className="text-center text-gray-800 text-2xl font-bold mb-2">
						{isReg ? "Sign Up" : "Sign In"}
					</Text>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<Field
								value={data.email}
								placeholder="Enter email"
								onChange={val => setData({ ...data, email: val })}
							/>

							<Field
								value={data.password}
								placeholder="Enter password"
								onChange={val => setData({ ...data, password: val })}
								isSecure={true}
							/>
							<Button onPress={AuthHandler} title="Let's go" />
							<Pressable onPress={() => setIsReg(!isReg)}>
								<Text className="text-gray-800 opacity-30 text-right text-sm">
									{isReg ? "Login" : "Register"}
								</Text>
							</Pressable>
						</>
					)}
				</View>
			</View>
		</View>
	);
};

export default Auth;
