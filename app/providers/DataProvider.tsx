import {
	Dispatch,
	FC,
	ReactNode,
	SetStateAction,
	createContext,
	useMemo,
	useState,
} from "react";

interface IContext {
	activeStories: string[] | null;
	setActiveStories: Dispatch<SetStateAction<string[] | null>>;
}

interface IProvider {
	children: ReactNode;
}

export const DataContext = createContext<IContext>({} as IContext);

export const DataProvider: FC<IProvider> = ({ children }) => {
	const [activeStories, setActiveStories] = useState<string[] | null>(null);

	const value = useMemo(
		() => ({
			activeStories,
			setActiveStories,
		}),
		[activeStories]
	);

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
