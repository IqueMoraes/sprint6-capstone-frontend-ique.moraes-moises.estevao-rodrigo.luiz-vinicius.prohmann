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
        userRotines.map((item) => {
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

=======
  const { userRotines, createRoutines } = useRoutines();
  const { userId } = useAuthToken();

  const formSchema = yup.object().shape({
    name: yup.string(),
    category: yup.string(),
    userId: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitData = (data) => {
    createRoutines(data);
    console.log(data)
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitData)}>
        <label>nome</label>
        <input {...register("name")} />
        <label>categoria</label>
        <input type="text" {...register("category")} />
        <input {...register("userId")} value={userId} disabled type="number" />
        <button type="submit">criar</button>
      </form>

      {userRotines.map((item) => {
        return (
          <div key={item.id}>
            <p> {item.name} </p>
            <p> {item.category} </p>
          </div>
        );
      })}

    </div>
  );
};
