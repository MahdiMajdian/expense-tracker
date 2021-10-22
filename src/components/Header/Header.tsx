import React from "react"
import { Months } from "../../Data"
import Card from "../UI/Card"
interface IHeaderProps {
	name: string
	date: number
	currencyType: string
	total: number
}

const Header: React.FC<IHeaderProps> = (props) => {
	const { currencyType, name, total } = props
	const date = new Date(props.date)
	return (
		<Card className="bg-gray-800 text-white p-6">
			<div className="flex justify-between mb-8">
				<p className="font-medium text-gray-200">{name}</p>
				<h3 className="font-medium text-gray-200">
					{Months[date.getMonth()].abbreviation} {date.getDate()},{" "}
					{date.getFullYear()}
				</h3>
			</div>
			<div className="flex justify-between items-end">
				<div>
					<h1 className="font-semibold text-white text-3xl">
						${total}
					</h1>
				</div>
				<p>{currencyType}</p>
			</div>
		</Card>
	)
}

export default Header
