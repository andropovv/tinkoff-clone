import { User, onAuthStateChanged } from "firebase/auth";

import { addDoc, collection } from "firebase/firestore";
import {
	FC,
	ReactNode,
	createContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { auth, db, login, logout, register } from "../firebase";

interface IContext {
	user: User | null;
	isLoading: boolean;
	register: (email: string, password: string) => Promise<void>;
	login: (email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
}

interface IAuthProvider {
	children: ReactNode | null;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC<IAuthProvider> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoadingInitial, setIsLoadingInitial] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	const registerHandler = async (email: string, password: string) => {
		setIsLoading(true);
		try {
			const { user } = await register(email, password);

			await addDoc(collection(db, "users"), {
				_id: user.uid,
				displayName: "No name",
			});
		} catch (error: any) {
			alert(`Error reg:  ${error}`);
		} finally {
			setIsLoading(false);
		}
	};

	const loginHandler = async (email: string, password: string) => {
		setIsLoading(true);
		try {
			await login(email, password);
		} catch (error: any) {
			alert(`Error login:  ${error}`);
		} finally {
			setIsLoading(false);
		}
	};

	const logoutHandler = async () => {
		setIsLoading(true);
		try {
			await logout();
		} catch (error: any) {
			alert(`Error logut:  ${error}`);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(
		() =>
			onAuthStateChanged(auth, user => {
				setUser(user || null);
				setIsLoadingInitial(false);
			}),
		[]
	);

	const value = useMemo(
		() => ({
			user,
			isLoading,
			login: loginHandler,
			logout: logoutHandler,
			register: registerHandler,
		}),
		[user, isLoading]
	);

	return (
		<AuthContext.Provider value={value}>
			{!isLoadingInitial && children}
		</AuthContext.Provider>
	);
};
