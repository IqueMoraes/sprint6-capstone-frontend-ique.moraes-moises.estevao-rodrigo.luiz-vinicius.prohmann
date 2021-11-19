import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services";
import { useAuthToken } from "../AuthToken";

const UserProfileContext = createContext();

export const UserProfileProvider = ({ children }) => {
  const { userId, authToken, setUserProfile } = useAuthToken();
  
const mudaLevel= () => {
  // ele capta os pontos do usuário, calcula o level e retorna uma edição. EditProfile.
}
  const EditProfile = (bodyJson, toastMessage) => {
    api
      .patch(`/users/${userId}`, bodyJson, {
        headers: { Authorization: "Bearer " + authToken },
      })
      .then((res) => {
        toast.success(toastMessage);
        setUserProfile(res.data);
        window.localStorage.setItem(
          "@tm/userProfile",
          JSON.stringify(res.data)
        );
      })
      .catch((_) => {
        toast.error("Não foi possível atualizar o perfil");
      });
  };

  return (
    <UserProfileContext.Provider value={{ EditProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfile = () => useContext(UserProfileContext);
