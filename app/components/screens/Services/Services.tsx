import React from "react";
import { Text, View } from "react-native";
import Layout from "../../layout/Layout";
import ServiceItem from "./Item/ServiceItem";
import { services } from "./data";

const Services = () => {
	return (
		<Layout>
			<Text className="text-center text-lg mb-6">Moscow</Text>
			<View className="flex-row flex-wrap justify-center">
				{services.map(service => (
					<ServiceItem key={service.title} service={service} />
				))}
			</View>
		</Layout>
	);
};

export default Services;
