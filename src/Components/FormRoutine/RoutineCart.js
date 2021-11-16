import { Button } from "@chakra-ui/react"
import { useRoutines } from "../../Providers/Routines"

export const RoutineCard = () => {

    const {
        title,
        setTitle,
        date,
        setDate,
        timeStart,
        setTimeStart,
        timeFinish,
        setTimeFinish,
        userRotines,
        createRoutines,
        editRoutine,
        deleteRoutine,
      } = useRoutines();

    return (
        <>
        {
            userRotines.map(item => {
                return <div key={item.id}>
                            <p> {item.title} </p>
                            <p> {item.month} </p>
                            <p> {item.day} </p>
                            <p> {item.timeStart} </p>
                            <p> {item.timeFinish} </p>
                            <Button colorScheme="yellow" size="sm" onClick={() => {}}> Editar </Button>
                            <Button colorScheme="red" size="sm" onClick={() => deleteRoutine(item.id)}> deletar </Button>
                        </div>
            })
        }
        </>
    )
}
            
                