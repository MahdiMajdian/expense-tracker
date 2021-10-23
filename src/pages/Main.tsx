import React from "react"
import { Route, Switch, useHistory } from "react-router"
import Header from "../components/Header/Header"
import { useAppSelector } from "../hooks"
import Transaction from "./Transaction"
import { BiArrowBack } from "react-icons/bi"
import Wallet from "./Wallet"

const Main = () => {
	const balance = useAppSelector((state) => state.wallet.items).reduce(
		(sum, val) =>
			val.category === "expense" ? sum - val.amount : sum + val.amount,
		0
	)
	const initialBalance = useAppSelector(
		(state) => state.wallet.initialBalance
	)
	const history = useHistory()
	return (
		<div className="h-screen w-full flex justify-center items-center">
			<div className="w-full max-w-lg h-full mt-32 relative">
				<Header
					name="Wallet Balance"
					date={Date.now()}
					currencyType="USD"
					total={initialBalance + balance}
				/>

				<Switch>
					<Route path="/wallet" exact>
						<Wallet />
					</Route>
					<Route path="/wallet/new">
						<p
							onClick={() => history.goBack()}
							className="absolute -left-20 top-2 text-purple-500">
							<BiArrowBack className="inline" /> Back
						</p>
						<Transaction type="add" />
					</Route>
					<Route path="/wallet/:id">
						<p
							onClick={() => history.goBack()}
							className="absolute -left-20 top-2 text-purple-500">
							<BiArrowBack className="inline" /> Back
						</p>
						<Transaction type="edit" />
					</Route>
				</Switch>
			</div>
		</div>
	)
}

export default Main
