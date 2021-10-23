export interface IItem {
	id: number
	amount: number
	note: string
	date: number
	category: "expense" | "income"
}
export interface IWallet {
	initialBalance: number
	walletBalance: number
	items: IItem[]
}
