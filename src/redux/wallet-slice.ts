import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IItem, IWallet } from "../types"

const initialState: IWallet = {
	initialBalance: 0,
	walletBalance: 0,
	items: [],
}

const walletSlice = createSlice({
	name: "wallet",
	initialState,
	reducers: {
		addTransaction(state, action: PayloadAction<IItem>) {
			state.items.push(action.payload)
		},
		editTransaction(state, action: PayloadAction<IItem>) {
			state.items = state.items.map((item) =>
				item.id === action.payload.id ? action.payload : item
			)
		},
		deleteTransaction(state, action: PayloadAction<number>) {
			state.items = state.items.filter(
				(item) => item.id !== action.payload
			)
		},
	},
})

export const walletActions = walletSlice.actions
export default walletSlice
