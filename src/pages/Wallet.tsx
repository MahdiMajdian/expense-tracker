import React from "react"
import { Link } from "react-router-dom"
import Button from "../components/UI/Button"
import Card from "../components/UI/Card"
import { useAppDispatch, useAppSelector } from "../hooks"
import { walletActions } from "../redux/wallet-slice"

const Wallet = () => {
	useAppSelector((state) => state.wallet.items)
	const dispatch = useAppDispatch()
	return (
		<div>
			<div className="flex justify-end">
				<Link to="/wallet/new">
					<Button className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-gray-800">+ Add Transaction</Button>
				</Link>
			</div>
			<Card className="p-4 mt-4">Test</Card>
		</div>
	)
}

export default Wallet
