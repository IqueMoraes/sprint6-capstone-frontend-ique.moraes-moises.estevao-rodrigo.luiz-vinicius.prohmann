import { useRoutines } from "../../Providers/Routines";
import { useAuthToken } from "../../Providers/AuthToken";
import { useState } from "react";

export const FormRoutine = () => {

  const { name, 
          category, 
          setName, 
          setCategory, 
          userRotines, 
          createRoutines,
          editRoutine,
          deleteRoutine } = useRoutines();


  const [showFormEdit, setShowFormEdit] = useState(false)

  const handleEdit = (routineId) => {
	editRoutine(routineId)
    setShowFormEdit(false)
  }


	return (
    	<div>
      		<div className="inputContainer">
				<input
					placeholder="Nome"
					value={name}
					type="text"
					onChange={e => setName(e.target.value)}
					required
				/>
				<input
					placeholder="Categoria"
					value={category}
					type="text"
					onChange={e => setCategory(e.target.value)}
					required
				/>
				<button onClick={createRoutines}> Criar </button>
      		</div>

			  {
				  userRotines.map(item => {
					  return <div key={item.id}>
							<p> {item.name} </p>
							<p> {item.category} </p>
							<button onClick={()  => setShowFormEdit(true)}> Editar </button>
							<button onClick={() => deleteRoutine(item.id)}> deletar </button>

							{
								showFormEdit && 
									<div className="inputContainer">
										<input
											placeholder="Nome"
											value={name}
											type="text"
											onChange={e => setName(e.target.value)}
											required
										/>
										<input
											placeholder="Categoria"
											value={category}
											type="text"
											onChange={e => setCategory(e.target.value)}
											required
										/>
										<button onClick={() => handleEdit(item.id)}> editar </button>
									</div>	
							}
					  </div>
				  })
			  }
		</div>
	)
}

 
