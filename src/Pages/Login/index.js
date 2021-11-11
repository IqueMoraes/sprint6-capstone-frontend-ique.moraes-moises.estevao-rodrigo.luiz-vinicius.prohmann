import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { api } from "../../Services";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import { useUser } from "../../Providers/User/index";

export const Login = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Email Obrigatório"),
    password: yup.string().required("Digite sua Senha"),
  });
  const { setUserInfo } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();

  const handleLogin = (data) => {
    toast.configure();
    api
      .post("/login/", data)
      .then((response) => {
        toast.success("Login Realizado com Sucesso");
        const decoded = jwt_decode(response.data.accessToken);
        setUserInfo(response.data.accessToken, response.data.user.id);
        history.push("/dashboard");
      })
      .catch((err) => toast.error("Email ou senha incorretos."));
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
