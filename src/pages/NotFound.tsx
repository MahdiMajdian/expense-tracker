import React from "react"
import { Link } from "react-router-dom"
import Button from "../components/UI/Button"

const NotFound = () => {
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-9xl font-semibold text-red-500">404</h1>
				<h1 className="text-4xl font-semibold text-red-500">
					Page not found
				</h1>
				<Link to="/">
					<Button className="mt-8">go home</Button>
				</Link>
			</div>
		</div>
	)
}

export default NotFound
