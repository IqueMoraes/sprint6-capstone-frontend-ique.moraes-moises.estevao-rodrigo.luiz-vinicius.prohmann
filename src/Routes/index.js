import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { NavigationMenu } from "../Components/MenuNavigation";
import { Achievments } from "../Pages/Achievments";
import { Advertising } from "../Pages/Advertising";
import { Dashboard } from "../Pages/Dashboard";
import { Forum } from "../Pages/Forum";
import { Home } from "../Pages/Home";
import Initial from "../Pages/Initial";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { Routines } from "../Pages/Routines";
import { ShowUsers } from "../Pages/ShowUsers";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Initial />

        {/* <NavigationMenu />
        <Home /> */}
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/cadastro">
        <Register />
      </Route>

      <Route path="/dashboard">
        <NavigationMenu />

        <Dashboard />
      </Route>

      <Route path="/routines">
        <NavigationMenu />

        <Routines />
      </Route>

      <Route path="/forum">
        <NavigationMenu />

        <Forum />
      </Route>

      <Route path="/adverts">
        <NavigationMenu />

        <Advertising />
      </Route>

      <Route path="/members">
        <NavigationMenu />

        <ShowUsers />
      </Route>

      <Route path="/achievments">
        <NavigationMenu />

        <Achievments />
      </Route>
    </Switch>
  );
};
