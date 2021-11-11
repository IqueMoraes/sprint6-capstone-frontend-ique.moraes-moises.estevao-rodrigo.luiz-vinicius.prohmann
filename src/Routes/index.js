import { Route, Switch } from "react-router"
import { Advertising } from "../Pages/Advertising"
import { Dashboard } from "../Pages/Dashboard"
import { Forum } from "../Pages/Forum"
import { Home } from "../Pages/Home"
import { Login } from "../Pages/Login"
import { Register } from "../Pages/Register"
import { Routines } from "../Pages/Routines"
import { ShowUsers } from "../Pages/ShowUsers"


export const Routes = () => {

    return (
        <Switch>

            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/login">
                <Login />
            </Route>

            <Route path="/cadastro">
                <Register />
            </Route>

            <Route path="/dashboard">
                <Dashboard />
            </Route>

            <Route path="/rotina">
                <Routines />
            </Route>

            <Route path="/forum">
                <Forum />
            </Route>

            <Route path="/anuncios">
                <Advertising />
            </Route>

            <Route>
                <ShowUsers />
            </Route>

        </Switch>
    )
}

