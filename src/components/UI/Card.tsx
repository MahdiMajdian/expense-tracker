import React from "react"
interface ICardProps {
	className?: string
}
const Card: React.FC<ICardProps> = (props) => {
	const { className, children } = props
	return <div className={`rounded-md p-4 shadow-md hover:shadow-lg m-4 ${className}`}>{children}</div>
}

export default Card
