import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { api } from "../../Services";

const AuthTokenContext = createContext({});

export const AuthTokenProvider = ({ children }) => {
  const [userId, setUserId] = useState(
    () => localStorage.getItem("@tm/userId") || ""
  );

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
        const idUser = res.data.user.id;
        window.localStorage.clear();
        window.localStorage.setItem("@tm/token", token);
        window.localStorage.setItem("@tm/userId", idUser);
        setAuthToken(token);
        setUserId(idUser);
        toast.success("Login realizado com sucesso");
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
    <AuthTokenContext.Provider
      value={{ authToken, handleLogin, handleLogout, handleRegister, userId }}
    >
      {children}
    </AuthTokenContext.Provider>
  );
};

export const useAuthToken = () => useContext(AuthTokenContext);
