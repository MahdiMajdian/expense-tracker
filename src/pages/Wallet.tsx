import React from "react"
import Header from "../components/Header/Header"
import Button from "../components/UI/Button"
import { useAppSelector } from "../hooks"

const Wallet = () => {
	const balance = useAppSelector((state) => state.wallet.walletBalance)

	return (
		<div className="h-screen w-full flex justify-center items-center">
			<div className="w-full max-w-lg h-full mt-32    ">
				<Header
					name="Wallet Balance"
					date={Date.now()}
					currencyType="USD"
					total={balance}
				/>
				<div className="mt-8 w-full flex justify-end">
					<Button className="">+ Add Transaction</Button>
				</div>
			</div>
		</div>
	)
}

export default Wallet
