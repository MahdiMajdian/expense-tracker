import React from "react"
interface IButtonProps {
	className?: string
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const Button: React.FC<IButtonProps> = (props) => {
	const { children, className } = props
	return (
		<button
			onClick={props.onClick}
			className={`${className} font-medium rounded py-2 px-4`}>
			{children}
		</button>
	)
}

export default Button
