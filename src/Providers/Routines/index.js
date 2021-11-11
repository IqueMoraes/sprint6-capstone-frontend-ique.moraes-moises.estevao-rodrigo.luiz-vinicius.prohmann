import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../Services";
import { useAuthToken } from "../AuthToken";


const RoutinesContext = createContext({})

export const RoutinesProvider = ({ children }) => {

    const [userRotines, setUserRoutines] = useState([])
    
    const { authToken, userId } = useAuthToken()

    const createRoutines = (data) => {

        api
            .post("/routines", data,  {
                headers: { Authorization: "Bearer " + authToken },
            })
            .then(res => {
                setUserRoutines([...userRotines, res.data]) 
            })
            .catch(err => console.log("Não criou rotina"))
    }

    useEffect(() => {
        api
            .get(`/routines?userId=${userId}`, {
                headers: { Authorization: "Bearer " + authToken },
            })
            .then(res => {
                setUserRoutines(res.data)
            })
            .catch(err => console.log("não pegou minhas rotinas"))
    }, [])
    


    return (
        <RoutinesContext.Provider value={{ userRotines, createRoutines }}>
            {children}
        </RoutinesContext.Provider>
    )

}

export const useRoutines = () => useContext(RoutinesContext)