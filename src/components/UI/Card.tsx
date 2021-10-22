import React from "react"
interface ICardProps {
	className?: string
}
const Card: React.FC<ICardProps> = (props) => {
	const { className, children } = props
	return <div className={`rounded-md shadow-md hover:shadow-lg ${className}`}>{children}</div>
}

export default Card
