import React from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header/Header"
import Button from "../components/UI/Button"
import { useAppSelector } from "../hooks"

const Main = () => {
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
			</div>
		</div>
	)
}

export default Main
