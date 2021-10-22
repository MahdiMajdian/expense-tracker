import { type } from "os"
import React from "react"
import Button from "../components/UI/Button"
import Card from "../components/UI/Card"
interface ITransactionProps {
	type: "add" | "edit"
}
const Transaction: React.FC<ITransactionProps> = (props) => {
	const { type } = props
	return (
		<div>
			<Card className="p-4 mt-8">
				<label htmlFor="amount" className="block font-medium mb-2">
					Enter Amount
				</label>
				<input
					type="number"
					step="0.01"
                    min='0'
					id="amount"
					className="w-full p-2 outline-none border rounded mb-6"
				/>
				<label htmlFor="note" className="block font-medium mb-2">
					Note
				</label>
				<textarea
					className="w-full p-2 outline-none border rounded mb-6"
					id="note"
				/>
				<label htmlFor="date" className="block font-medium mb-2">
					Date
				</label>
				<input
					id="date"
					type="date"
					className="w-full p-2 outline-none border rounded mb-6"
				/>
				<label htmlFor="category" className="block font-medium mb-2">
					Date
				</label>
				<select className="w-full p-2 outline-none border rounded mb-6">
					<option value="income">Income</option>
					<option value="expense">Expense</option>
				</select>
			</Card>
			<div className="mt-8 flex justify-between">
				<Button className="bg-gray-200 hover:bg-gray-300 text-gray-800">
					Cancel
				</Button>
				<div className='flex gap-4'>
					{type==='edit' && <Button className="bg-gray-200 hover:bg-gray-300 text-gray-800">
						Delete
					</Button>}
					<Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800">
						Save Transaction
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Transaction
