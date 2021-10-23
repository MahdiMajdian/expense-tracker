import React from "react"
import { Link } from "react-router-dom"
import TransactionItem from "../components/TransactionItem/TransactionItem"
import Button from "../components/UI/Button"
import Card from "../components/UI/Card"
import { useAppDispatch, useAppSelector } from "../hooks"
import { walletActions } from "../redux/wallet-slice"

const Wallet = () => {
	useAppSelector((state) => state.wallet.items)
	const dispatch = useAppDispatch()
	const walletItems = useAppSelector((state) => state.wallet.items)
	return (
		<div className="">
			<div className="flex justify-end mt-8">
				<Link to="/wallet/new">
					<Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800">
						+ Add Transaction
					</Button>
				</Link>
			</div>
			{!walletItems.length && "No Transactions"}
			{walletItems.map((item) => (
				<TransactionItem key={item.id} {...item} />
			))}
		</div>
	)
}

export default Wallet
