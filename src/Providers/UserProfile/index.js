import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

import { toast } from "react-toastify";
import { api } from "../../Services";

import { useAuthToken } from "../AuthToken";

const UserProfileContext = createContext();

export const UserProfileProvider = ({children})=> {

    const { userId, authToken } = useAuthToken();

  

    const EditProfile = (bodyJson, toastMessage) => {
        api.patch(`/users/${userId}`, bodyJson, {
            headers: { Authorization: "Bearer " + authToken },
        }).then((_)=>{
            toast.success(toastMessage);
        }).catch((_)=>{
            toast.error("Não foi possível atualizar o perfil")
        })
    }

    return (
        <UserProfileContext.Provider value={{ EditProfile }}>
            {children}
        </UserProfileContext.Provider>
    )
}

export const useUserProfile = () => useContext(UserProfileContext);