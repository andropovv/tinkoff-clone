import {
	NavigationContainer,
	useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import Footer from "../components/layout/Footer/Footer";
import Auth from "../components/screens/Auth/Auth";
import Home from "../components/screens/Home/Home";
import More from "../components/screens/More/More";
import Paymets from "../components/screens/Payments/Paymets";
import Profile from "../components/screens/Profile/Profile";
import Services from "../components/screens/Services/Services";
import Support from "../components/screens/Support/Support";
import { useAuth } from "../hooks/useAuth";

const Stack = createNativeStackNavigator();

const Navigation = () => {
	const { user } = useAuth();
	const ref = useNavigationContainerRef();

	const [name, setName] = useState<string | undefined>(undefined);

	useEffect(() => {
		const timeout = setTimeout(() => setName(ref.getCurrentRoute()?.name), 100);

		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		const listener = ref.addListener("state", () =>
			setName(ref.getCurrentRoute()?.name)
		);

		return () => {
			ref.removeListener("state", listener);
		};
	}, []);

	return (
		<>
			<NavigationContainer ref={ref}>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					{user ? (
						<>
							<Stack.Screen name="Home" component={Home} />
							<Stack.Screen name="More" component={More} />
							<Stack.Screen name="Payments" component={Paymets} />
							<Stack.Screen name="Support" component={Support} />
							<Stack.Screen name="Profile" component={Profile} />
							<Stack.Screen name="Services" component={Services} />
						</>
					) : (
						<Stack.Screen name="Auth" component={Auth} />
					)}
				</Stack.Navigator>
			</NavigationContainer>
			{user && name && <Footer navigate={ref.navigate} currentRoute={name} />}
		</>
	);
};

export default Navigation;
