import React, { FC } from "react";
import { TextInput } from "react-native";

interface IField {
	onChange: (value: string) => void;
	value: string;
	placeholder: string;
	isSecure?: boolean;
}

const Field: FC<IField> = ({ placeholder, value, onChange, isSecure }) => {
	return (
		<TextInput
			placeholder={placeholder}
			onChangeText={onChange}
			value={value}
			secureTextEntry={isSecure}
			autoCapitalize="none"
			className="rounded-xl bg-gray-100 mt-3 p-3 w-full"
		/>
	);
};

export default Field;
