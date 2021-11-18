import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services";
import { useAuthToken } from "../AuthToken";

const RoutinesContext = createContext({});

export const RoutinesProvider = ({ children }) => {
  const [userRotines, setUserRoutines] = useState([]);
  const [date, setDate] = useState("");

  // const [ arrayData, setArrayData ] = useState([])

  const { authToken, userId } = useAuthToken();

  useEffect(() => {
    api
      .get(`/routines?userId=${userId}`, {
        headers: { Authorization: "Bearer " + authToken },
      })
      .then((res) => {
        setUserRoutines(res.data);
      })
      .catch((_) => console.log("não pegou minhas rotinas"));
  }, [userId]);


  const createRoutines = (info) => {
      const data = info;
    api
      .post("/routines", data, {
        headers: { Authorization: "Bearer " + authToken },
      })
      .then((res) => {
        console.log(res);
        setUserRoutines([...userRotines, res.data]);
        toast.success("Rotina criada com sucesso");
      })
      .catch((_) => toast.error("Não foi possível criar a rotina"));
  };

  const editRoutine = (routineId, data) => {
    // const data = {};
    // if (month) data.month = month;
    // if (day) data.day = day;
    // if (timeStart) data.timeStart = timeStart;
    // if (timeFinish) data.timeFinish = timeFinish;
    // if (description) data.description = description;

    api
      .patch(`/routines/${routineId}`, data, {
        headers: { Authorization: "Bearer " + authToken },
      })
      .then((res) => {
        const edited = userRotines.filter((item) => item.id !== routineId);
        setUserRoutines([...edited, res.data]);
        toast.success("Rotina editada com sucesso!");
        console.log(data);
      })
      .catch((_) => toast.error("Não foi possível editar a rotina"));
  };

  const deleteRoutine = (routineId) => {
    api
      .delete(`/routines/${routineId}`, {
        headers: { Authorization: "Bearer " + authToken },
      })
      .then((_) => {
        const deleted = userRotines.filter((item) => item.id !== routineId);
        setUserRoutines([...deleted]);
        toast.success("Rotina excluída com sucesso");
      })
      .catch((_) => toast.error("Não foi possível deletar a rotina"));
  };

  return (
    <RoutinesContext.Provider
      value={{
        userRotines,
        createRoutines,
        editRoutine,
        deleteRoutine,
        // setDescription,
        date,
        setDate,
        // timeStart,
        // setTimeStart,
        // timeFinish,
        // setTimeFinish,
      }}
    >
      {children}
    </RoutinesContext.Provider>
  );
};

export const useRoutines = () => useContext(RoutinesContext);
