import { createSlice } from "@reduxjs/toolkit"
import { IWallet } from "../types"

const initialState: IWallet = {
	initialBalance: 0,
	walletBalance: 0,
	items: [],
}

const walletSlice = createSlice({
	name: "wallet",
	initialState,
	reducers: {
		addProduct(state , payload) {
			console.log(payload)
		},
	},
})

export const walletActions = walletSlice.actions
export default walletSlice
