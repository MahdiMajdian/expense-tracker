import { Redirect, Route, Switch } from "react-router"
import Transaction from "./pages/Transaction"
import Main from "./pages/Main"
import NotFound from "./pages/NotFound"

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact>
				<Redirect to="/wallet" />
			</Route>
			<Route path="/wallet">
				<Main />
			</Route>
			<Route path="*">
				<NotFound />
			</Route>
		</Switch>
	)
}

export default Routes
