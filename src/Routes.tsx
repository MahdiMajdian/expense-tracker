import { Redirect, Route, Switch } from "react-router"
import NewTransaction from "./pages/NewTransaction"
import Wallet from "./pages/Wallet"

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact>
				<Redirect to="/wallet" />
			</Route>
			<Route path="/wallet/:id">
				<NewTransaction />
			</Route>
			<Route path="/wallet">
				<Wallet />
			</Route>
		</Switch>
	)
}

export default Routes
