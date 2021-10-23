import React from "react"
interface IButtonProps {
	className?: string
	type?: "button" | "reset" | "submit"
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const Button: React.FC<IButtonProps> = (props) => {
	const { children, className, type = "button" } = props
	return (
		<button
			onClick={props.onClick}
			type={type}
			className={`${className} font-medium rounded py-2 px-4`}>
			{children}
		</button>
	)
}

export default Button
