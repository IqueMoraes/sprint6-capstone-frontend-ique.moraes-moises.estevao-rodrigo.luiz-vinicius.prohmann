import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';

import { toast } from "react-toastify";
import { api } from "../../Services";

import { useUserProfile } from '../UserProfile';

const AchievmentContext = createContext({});

export const AchievmentProvider = ({children}) => {

    const [ achievmentsList, setAchievmentsList ] = useState([]);
    const { userInfoProfile, EditProfile } = useUserProfile();

    useEffect(()=> {
        console.log("entrei no provider achievment");
        api.get("/achievment").then((res)=> {
            setAchievmentsList(res.data);
            console.log(res.data)
        }).catch((_) => {
            toast.error("Não foi possível carregar os emblemas das conquistas");
        })
    }, [])

    const AddAchievments = (achievmentObject) => {
        const newAchievments = [...userInfoProfile.achievments, achievmentObject];
        const newPoints = userInfoProfile.points + 15;

        EditProfile({"achievments": newAchievments, "points": newPoints}, "Conquista adicionada! Você ganhou 15 pontos!")
        
    }

    const RemoveAchievments = (achievmentObject) => {
        const actualAchievments = userInfoProfile.achievments.filter(item => item.title !== achievmentObject.title);
        const newPoints = userInfoProfile.points - 15;
        
        EditProfile({"achievments": actualAchievments, "points": newPoints }, "Conquista removida!")
    }


    return (
        <AchievmentContext.Provider value={{achievmentsList, AddAchievments, RemoveAchievments}}>
            {children}
        </AchievmentContext.Provider>
    )


}

export const useAchievment = () => useContext(AchievmentContext);