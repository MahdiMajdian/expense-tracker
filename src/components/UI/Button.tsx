import React from "react"

const Button: React.FC = (props) => {
	const { children } = props
	return (
		<button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium rounded py-2 px-4">
			{children}
		</button>
	)
}

export default Button
