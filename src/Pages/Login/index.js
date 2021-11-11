import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { api } from "../../Services";
import jwt_decode from "jwt-decode";

export const Login = () => {
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

  console.log(errors);
  const history = useHistory();

  const handleLogin = (data) => {
    api
      .post("/login/", data)
      .then((response) => {
        const decoded = jwt_decode(response.data.accessToken);
        console.log("decoded", decoded);
        console.log("response", response);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <label>Email</label>
        <input {...register("email")} />
        <label>Senha</label>
        <input type="password" {...register("password")} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
