import { IMoreItem } from "./types";

const startUrl = "https://www.tinkoff.ru";

export const menu: IMoreItem[] = [
	{
		title: "ATM machines",
		description: "Search for Tinkoff ATMs and other banks on the map",
		iconName: "account-balance",
		link: `${startUrl}/maps/atm/`,
	},
	{
		title: "For business",
		description: "Online banking for small bussiness",
		iconName: "business",
		link: `${startUrl}/business/`,
	},
	{
		title: "Ordering certificates",
		description: "Account statements by e-mail and in paper form",
		iconName: "find-in-page",
		link: `${startUrl}/cards/debit-cards/tinkoff-black/help/get-statement/reference/`,
	},
];
