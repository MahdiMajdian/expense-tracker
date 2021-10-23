export interface IItem {
	id: number
	amount: number
	note: string
	date: string
	category: "expense" | "income"
}
export interface IWallet {
	initialBalance: number
	walletBalance: number
	items: IItem[]
}
