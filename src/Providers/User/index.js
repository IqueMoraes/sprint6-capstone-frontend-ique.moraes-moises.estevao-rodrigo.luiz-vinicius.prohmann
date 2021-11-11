import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router";
import { api } from "../../Services";
import { toast } from "react-toastify";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("@tm/token") || ""
  );

  const history = useHistory();

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
      value={{ authToken, handleLogin, handleLogout, handleRegister }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
