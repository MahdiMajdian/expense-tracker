import { type } from "os"
import React from "react"
import Card from "../UI/Card"
interface ITransactionItemProps {
	amount: number
	note: string
	date: number
	category: "expense" | "income"
}
const TransactionItem: React.FC<ITransactionItemProps> = (props) => {
	const { amount, note, date, category } = props
	const day = new Date(date).getDate()
	return (
		<Card className="flex justify-between items-center p-4">
			<div className="flex items-center">
				<h1 className="font-bold text-3xl mr-4">
					{day < 10 && 0}
					{day}
				</h1>
				<div>
					<h5 className="font-medium text-xl">{category}</h5>
					<p className="font-medium text-gray-500">{note}</p>
				</div>
			</div>
			<p
				className={`${
					category === "expense" ? "text-red-500" : "text-green-500"
				} font-bold text-xl`}>
				{category === "expense" ? "-" : "+"}${amount}
			</p>
		</Card>
	)
}

export default TransactionItem
