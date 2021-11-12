import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services";
import { useAuthToken } from "../AuthToken";


const RoutinesContext = createContext({})

export const RoutinesProvider = ({ children }) => {

    const [userRotines, setUserRoutines] = useState([])
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    
    const { authToken, userId } = useAuthToken()

    useEffect(() => {
        api
            .get(`/routines?userId=${userId}`, {
                headers: { Authorization: "Bearer " + authToken },
            })
            .then(res => {
                setUserRoutines(res.data)
            })
            .catch(err => console.log("não pegou minhas rotinas"))
    }, [userId])

    const createRoutines = () => {

        const data = {
            name: name,
            category: category,
            userId: userId,
        }

        api
            .post("/routines", data,  {
                headers: { Authorization: "Bearer " + authToken },
            })
            .then(res => {
                setUserRoutines([...userRotines, res.data])
                toast.success("Rotina criada com sucesso") 
            })
            .catch(_ => toast.error("Não foi possível criar a rotina"))
    }

    const editRoutine = (routineId) => {

        const data = {};
        if (name) data.name = name;
        if (category) data.category = category;

        api
            .patch(`/routines/${routineId}`, data, {
                headers: { Authorization: "Bearer " + authToken },
            })
            .then((res) => {
                const edited = userRotines.filter((item) => item.id !== routineId);
                setUserRoutines([...edited, res.data]);
                toast.success("Rotina editada com sucesso!");
              })
              .catch((_) => toast.error("Não foi possível editar a rotina"));
    }

    const deleteRoutine = (routineId) => {

        api
            .delete(`/routines/${routineId}`, {
                headers: { Authorization: "Bearer " + authToken },
            })
            .then((_) => {
                const deleted = userRotines.filter(item => item.id !== routineId)
                setUserRoutines([...deleted]);
                toast.success("Rotina excluída com sucesso");
              })
              .catch((_) => toast.error("Não foi possível deletar a rotina"));
    }



    return (
        <RoutinesContext.Provider value={{ 
            userRotines, 
            createRoutines, 
            editRoutine, 
            deleteRoutine,
            name,
            category,
            setName,
            setCategory, 
        }}>
            {children}
        </RoutinesContext.Provider>
    )

}

export const useRoutines = () => useContext(RoutinesContext)