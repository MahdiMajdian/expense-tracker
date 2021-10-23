import { type } from "os"
import React, { useState } from "react"
import { useHistory } from "react-router"
import Button from "../components/UI/Button"
import Card from "../components/UI/Card"
import { useAppDispatch, useAppSelector } from "../hooks"
import { walletActions } from "../redux/wallet-slice"
interface ITransactionProps {
	type: "add" | "edit"
}
const Transaction: React.FC<ITransactionProps> = (props) => {
	const { type } = props
	const [amount, setAmount] = useState<number>(0)
	const [note, setNote] = useState<string>("")
	const [date, setDate] = useState<string>("")
	const [category, setCategory] = useState<string>("income")
	const history = useHistory()
	const dispatch = useAppDispatch()
	const addTransactionHandler = () => {
		if (amount && date && category) {
			if (type === "add") {
				dispatch(
					walletActions.addTransaction({
						id: Date.now(),
						amount: amount,
						note: note,
						date: new Date(date).getTime(),
						category: category === "income" ? "income" : "expense",
					})
				)
			}
			history.push("/wallet")
		}
	}

	return (
		<div>
			<form>
				<Card className="p-4 mt-8">
					<label htmlFor="amount" className="block font-medium mb-2">
						Enter Amount
					</label>
					<input
						value={amount}
						onChange={(e) => setAmount(+e.target.value)}
						type="number"
						step="0.01"
						min="0"
						id="amount"
						className="w-full p-2 outline-none border rounded mb-6"
					/>
					<label htmlFor="note" className="block font-medium mb-2">
						Note
					</label>
					<textarea
						value={note}
						onChange={(e) => setNote(e.target.value)}
						className="w-full p-2 outline-none border rounded mb-6"
						id="note"
					/>
					<label htmlFor="date" className="block font-medium mb-2">
						Date
					</label>
					<input
						value={date}
						onChange={(e) => setDate(e.target.value)}
						id="date"
						type="date"
						className="w-full p-2 outline-none border rounded mb-6"
					/>
					<label
						htmlFor="category"
						className="block font-medium mb-2">
						Date
					</label>
					<select
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						className="w-full p-2 outline-none border rounded mb-6">
						<option value="income">Income</option>
						<option value="expense">Expense</option>
					</select>
				</Card>
				<div className="mt-8 flex justify-between">
					<Button className="bg-gray-200 hover:bg-gray-300 text-gray-800">
						Cancel
					</Button>
					<div className="flex gap-4">
						{type === "edit" && (
							<Button className="bg-gray-200 hover:bg-gray-300 text-gray-800">
								Delete
							</Button>
						)}
						<Button
							onClick={addTransactionHandler}
							className="bg-yellow-400 hover:bg-yellow-500 text-gray-800">
							Save Transaction
						</Button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Transaction
