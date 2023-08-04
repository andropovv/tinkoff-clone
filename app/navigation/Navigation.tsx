import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Auth from "../components/screens/Auth/Auth";
import Home from "../components/screens/Home/Home";
import More from "../components/screens/More/More";
import Profile from "../components/screens/Profile/Profile";
import Services from "../components/screens/Services/Services";
import Support from "../components/screens/Support/Support";
import { useAuth } from "../hooks/useAuth";

const Stack = createNativeStackNavigator();

const Navigation = () => {
	const { user } = useAuth();

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{user ? (
					<>
						<Stack.Screen name="Home" component={Home} />
						<Stack.Screen name="More" component={More} />
						<Stack.Screen name="Payments" component={Services} />
						<Stack.Screen name="Support" component={Support} />
						<Stack.Screen name="Profile" component={Profile} />
					</>
				) : (
					<Stack.Screen name="Auth" component={Auth} />
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
