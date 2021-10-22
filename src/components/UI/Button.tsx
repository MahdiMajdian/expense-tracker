import React from "react"
interface IButtonProps {
	className?: string
}
const Button: React.FC<IButtonProps> = (props) => {
	const { children, className } = props
	return (
		<button
			className={`${className} bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium rounded py-2 px-4`}>
			{children}
		</button>
	)
}

export default Button
