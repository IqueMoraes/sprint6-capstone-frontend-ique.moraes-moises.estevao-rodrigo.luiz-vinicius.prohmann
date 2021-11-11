import { useRoutines } from "../../Providers/Routines";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthToken } from "../../Providers/AuthToken";

export const FormRoutine = () => {
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
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitData)}>
        <label>nome</label>
        <input {...register("name")} />
        <label>categoria</label>
        <input type="text" {...register("category")} />
        <input value={userId} disabled {...register("userId")} />
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
