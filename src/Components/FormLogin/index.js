import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthToken } from "../../Providers/AuthToken";
import { Grid, GridItem } from "@chakra-ui/react";

export const FormLogin = () => {
  const { handleLogin } = useAuthToken();

  const formSchema = yup.object().shape({
    email: yup.string().required("Email Obrigatório"),
    password: yup.string().required("Digite sua Senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  // console.log(errors)

  const submitData = (data) => {
    handleLogin(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitData)}>
        <label>Email</label>
        <input {...register("email")} />
        <label>Senha</label>
        <input type="password" {...register("password")} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
