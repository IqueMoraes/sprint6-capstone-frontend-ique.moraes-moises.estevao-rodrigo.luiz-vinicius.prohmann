import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services";
import { useUser } from "../User";


const RoutinesContext = createContext({})

export const RoutinesProvider = ({ children }) => {

    const [routines, setRoutines] = useState([])

    const { token } = useUser()

    const createRoutines = (data) => {

        api
            .post("/routines", data,  {
                headers: { Authorization: "Bearer " + token },
            })
            .then(res => {
                console.log([...res.data] + "todas rotinas")  
            })
            .catch(err => console.log("Não criou rotina"))
    }

    // useEffect(() => {
    //     api
    //         .get(`/routines`, {
    //             headers: { Authorization: "Bearer " + token },
    //         })
    //         .then(res => {
    //             setRoutines(res.data)
    //             console.log("minhas rotinas" + res.data)
    //         })
    //         .catch(err => console.log("não pegou minhas rotinas"))
    // }, [token])
        

    // const getRoutines = () => {
    //     api
    //         .get(`/routines?userId=${userId}`, {
    //             headers: { Authorization: "Bearer " + token },
    //         })
    //         .then(res => {
    //             setRoutines(res.data)
    //             console.log("minhas rotinas" + res.data)
    //         })
    //         .catch(err => console.log("não pegou minhas rotinas"))
    // }

    // const editRoutines = (data) => {
    //     api
    //         .get(`/routines`)
    // }

    return (
        <RoutinesContext.Provider value={{ routines, createRoutines }}>
            {children}
        </RoutinesContext.Provider>
    )

}

export const useRoutines = () => useContext(RoutinesContext)