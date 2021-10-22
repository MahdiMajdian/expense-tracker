import { createSlice } from "@reduxjs/toolkit"
import { IWallet } from "../types"

const initialState: IWallet = {
	walletBalance: 0,
}

const walletSlice = createSlice({
	name: "wallet",
	initialState,
	reducers: {
		addProduct() {
			alert('hey')
		},
	},
})

export const walletActions = walletSlice.actions
export default walletSlice
