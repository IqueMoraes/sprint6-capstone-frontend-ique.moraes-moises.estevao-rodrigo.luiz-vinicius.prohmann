import { useRoutines } from "../../Providers/Routines";
import { useState } from "react";
import { Checkbox, CheckboxGroup, Button, ButtonGroup, Input } from "@chakra-ui/react"


export const FormRoutine = () => {
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

  const [showFormEdit, setShowFormEdit] = useState(false);

  const handleEdit = (routineId) => {
    editRoutine(routineId);
    setShowFormEdit(false);
  };


return (

  <div>
    <div className="inputContainer">
      <Input
        variant="outline"
        placeholder="Título"
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        required
        />
      <Input
        placeholder="Dia"
        value={date}
        type="date"
        onChange={(e) => setDate(e.target.value)}
        required
        />
      <Input
        placeholder="Horário"
        value={timeStart}
        type="time"
        onChange={(e) => setTimeStart(e.target.value)}
        required
        min={Date.now()}
        />
      <Input
        placeholder="Horário"
        value={timeFinish}
        type="time"
        onChange={(e) => setTimeFinish(e.target.value)}
        required
        />
      <Button colorScheme="teal" size="sm" onClick={createRoutines}> Criar </Button>
    </div>

    {userRotines.map((item) => {
      return <div key={item.id}>
          <p> {item.title} </p>
          <p> {item.month} </p>
          <p> {item.day} </p>
          <p> {item.timeStart} </p>
          <p> {item.timeFinish} </p>
          <Button colorScheme="yellow" size="sm" onClick={() => setShowFormEdit(true)}> Editar </Button>
          <Button colorScheme="red" size="sm" onClick={() => deleteRoutine(item.id)}> deletar </Button>

          {showFormEdit && 
            <div className="inputContainer">
              <input
                placeholder="Nome"
                value={title}
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <input
                placeholder="Dia"
                value={date}
                type="date"
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <input
                placeholder="Horário"
                value={timeStart}
                type="time"
                onChange={(e) => setTimeStart(e.target.value)}
                required
              />
              <input
                placeholder="Horário"
                value={timeFinish}
                type="time"
                onChange={(e) => setTimeFinish(e.target.value)}
                required
              />
              <Button colorScheme="teal" size="sm" variant="outline" onClick={() => handleEdit(item.id)}> Editar </Button>
            </div>
          }
        </div>
    })}
  </div>
)}
