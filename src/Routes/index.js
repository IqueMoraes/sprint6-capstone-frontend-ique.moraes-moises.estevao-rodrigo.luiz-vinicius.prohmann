import { Switch, Route, Redirect } from "react-router-dom";
import { NavigationMenu } from "../Components/MenuNavigation";
import { Achievments } from "../Pages/Achievments";
import { Adverts } from "../Pages/Adverts";
import { Dashboard } from "../Pages/Dashboard";
import { Forum } from "../Pages/Forum";
import Home from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { Routines } from "../Pages/Routines";
import { ShowUsers } from "../Pages/ShowUsers";
import { useAuthToken } from "../Providers/AuthToken";

export const Routes = () => {
  const { authToken } = useAuthToken();

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/login">
        {!!authToken ? (
          <>
            <Redirect to="/dashboard" />
            {/* {toast.warn("Você já está logado em sua conta.")} */}
          </>
        ) : (
          <>
            <Login />
          </>
        )}
      </Route>

      <Route path="/register">
        {!!authToken ? (
          <>
            <Redirect to="/dashboard" />
            {/* {toast.warn("Você já está cadastrado e logado em sua conta.")} */}
          </>
        ) : (
          <>
            <Register />
          </>
        )}
      </Route>

      <Route path="/dashboard">
        {!!authToken ? (
          <>
            <NavigationMenu />
            <Dashboard />
          </>
        ) : (
          <>
            <Redirect to="/login" />
            {/* {toast.warn("Faça o login para acessar sua página.")} */}
          </>
        )}
      </Route>

      <Route path="/routines">
        {!!authToken ? (
          <>
            <NavigationMenu />
            <Routines />
          </>
        ) : (
          <>
            <Redirect to="/login" />
            {/* {toast.warn("Faça o login para acessar sua página.")} */}
          </>
        )}
      </Route>

      <Route path="/forum">
        {!!authToken ? (
          <>
            <NavigationMenu />
            <Forum />
          </>
        ) : (
          <>
            <Redirect to="/login" />
            {/* {toast.warn("Faça o login para acessar sua página.")} */}
          </>
        )}
      </Route>

      <Route path="/adverts">
        {!!authToken ? (
          <>
            <NavigationMenu />
            <Adverts />
          </>
        ) : (
          <>
            <Redirect to="/login" />
            {/* {toast.warn("Faça o login para acessar sua página.")} */}
          </>
        )}
      </Route>

      <Route path="/members">
        {!!authToken ? (
          <>
            <NavigationMenu />
            <ShowUsers />
          </>
        ) : (
          <>
            <Redirect to="/login" />
            {/* {toast.warn("Faça o login para acessar sua página.")} */}
          </>
        )}
      </Route>

      <Route path="/achievments">
        {!!authToken ? (
          <>
            <NavigationMenu />
            <Achievments />
          </>
        ) : (
          <>
            <Redirect to="/login" />
            {/* {toast.warn("Faça o login para acessar sua página.")} */}
          </>
        )}
      </Route>
    </Switch>
  );
};
