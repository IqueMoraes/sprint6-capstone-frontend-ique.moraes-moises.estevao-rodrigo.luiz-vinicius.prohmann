import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { api } from "../../Services";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    () => JSON.parse(localStorage.getItem("@tm/token")) || ""
  );

  const [userId, setUserId] = useState();

  const history = useHistory();

  const setUserInfo = (token, userId) => {
    localStorage.setItem("@tm/token", JSON.stringify(token));
    localStorage.setItem("@tm/userId", JSON.stringify(userId));
    setAuthToken(token);
    setUserId(userId);
  };

  const handleRegister = (data) => {
    api
      .post("/users", data)
      .then((_) => {
        toast.success("Cadastro feito com sucesso.");
        history.push("/");
      })
      .catch((_) => toast.error("Email já cadastrado!"));
  };

  const handleLogin = (data) => {
    api
      .post("/login", data)
      .then((res) => {
        const token = res.data.accessToken;
        window.localStorage.clear();
        window.localStorage.setItem("@tm/token", token);
        setAuthToken(token);
        history.push("/dashboard");
      })
      .catch((_) => toast.error("Email ou senha incorretos."));
  };

  const handleLogout = () => {
    window.localStorage.clear();
    setAuthToken("");
    history.push("/");
  };

  return (
    <UserContext.Provider
      value={{
        authToken,
        handleLogin,
        handleLogout,
        handleRegister,
        setUserInfo,
        userId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
