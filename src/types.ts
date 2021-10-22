export interface IItem {
	id: number
	type: "Expense" | "Income"
	amount: number
	note: string
	date: number
}
export interface IWallet {
	initialBalance: number
	walletBalance: number
	items: IItem[]
}
