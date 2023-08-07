import React, { FC } from "react";
import { ImageBackground, ImageSourcePropType, Text } from "react-native";
import { IAccount } from "../types";

const ImageCard: FC<{ account: IAccount }> = ({
	account: { name, cardNumber },
}) => {
	const imageBlack: ImageSourcePropType = require("../../../../../../assets/blackCard.png");
	const imagePlatinum: ImageSourcePropType = require("../../../../../../assets/platinumCard.png");

	return (
		<ImageBackground
			source={name === "Tinkoff Platinum" ? imagePlatinum : imageBlack}
			resizeMode="contain"
			className="w-14 justify-end h-10 items-start"
			style={{ padding: 4.5 }}
		>
			<Text className="text-white font-medium" style={{ fontSize: 10 }}>
				{cardNumber.slice(-4)}
			</Text>
		</ImageBackground>
	);
};

export default ImageCard;
