export type TypeName = "Tinkoff Black" | "Tinkoff Platinum";
export type TypeCurrency = "RUB" | "USD";

export interface IAccount {
	_id: string;
	userId: string;
	balance: number;
	cardNumber: string;
	currency: TypeCurrency;
	name: TypeName;
}
