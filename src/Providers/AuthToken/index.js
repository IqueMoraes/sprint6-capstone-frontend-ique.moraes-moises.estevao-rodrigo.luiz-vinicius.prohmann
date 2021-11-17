import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";
import { api } from "../../Services";
import { useAchievment } from "../Achievment";

const AuthTokenContext = createContext({});

export const AuthTokenProvider = ({ children }) => {
  const [userId, setUserId] = useState(
    () => localStorage.getItem("@tm/userId") || ""
  );

  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("@tm/token") || ""
  );

  const [userProfile, setUserProfile] = useState(() =>
    JSON.parse(localStorage.getItem("@tm/userProfile" || ""))
  );

  const history = useHistory();

  const handleRegister = (data) => {
    api
      .post("/users", data)
      .then((res) => {
        toast.success("Cadastro feito com sucesso.");
        history.push("/");
        return res;
      })
      .catch((err) => {
        toast.error("Email já cadastrado!");
        return err;
      });
  };

  const handleLogin = (data) => {
    api
      .post("/login", data)
      .then((res) => {
        const token = res.data.accessToken;
        const idUser = res.data.user.id;
        const dataUserProfile = res.data.user;
        window.localStorage.clear();
        window.localStorage.setItem("@tm/token", token);
        window.localStorage.setItem("@tm/userId", idUser);
        window.localStorage.setItem(
          "@tm/userProfile",
          JSON.stringify(dataUserProfile)
        );
        setAuthToken(token);
        setUserId(idUser);
        setUserProfile(dataUserProfile);
        toast.success("Login realizado com sucesso");
        history.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Email ou senha incorretos.");
      });
  };

  const handleLogout = () => {
    window.localStorage.clear();

    history.push("/");
  };

  return (
    <AuthTokenContext.Provider
      value={{
        authToken,
        handleLogin,
        handleLogout,
        handleRegister,
        userId,
        userProfile,
        setUserProfile,
      }}
    >
      {children}
    </AuthTokenContext.Provider>
  );
};

export const useAuthToken = () => useContext(AuthTokenContext);
