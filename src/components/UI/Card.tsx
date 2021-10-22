import React from "react"
interface ICardProps {
	className?: string
	onClick?: React.MouseEventHandler<HTMLDivElement>
}
const Card: React.FC<ICardProps> = (props) => {
	const { className, children } = props
	return (
		<div
			onClick={props.onClick}
			className={`rounded-md shadow-md hover:shadow-lg ${className}`}>
			{children}
		</div>
	)
}

export default Card
