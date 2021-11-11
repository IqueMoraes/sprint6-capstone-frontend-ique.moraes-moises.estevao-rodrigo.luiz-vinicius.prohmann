import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { api } from "../../Services";
import jwt_decode from "jwt-decode";

export const Register = () => {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("nome Obrigatório")
      .min(3, "O nome deve conter no minimo 3 caracteres"),
    email: yup
      .string()
      .required("Email Obrigatório")
      .email("Não é um e-mail válido"),
    urlSocialMedia: yup
      .string()
      .required("Insira aqui o endereço da sua rede social preferida"),
    password: yup
      .string()
      .required("Digite sua Senha")
      .min(6, "A senha deve ter no mínimo 6 caracteres"),
    passwordConfirmation: yup
      .string()
      .required("Confirmação de senha é obrigatória")
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
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
    const { birth, email, name, outSince, password, urlSocialMedia } = data;
    const sendToRegister = {
      birth: birth,
      email: email,
      name: name,
      outSince: outSince,
      password: password,
      urlSocialMedia: urlSocialMedia,
      points: 0,
      level: 1,
    };
    console.log(sendToRegister);
    api
      .post("/register/", sendToRegister)
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
        <label>Nome</label>
        <input {...register("name")} />
        <label>Email</label>
        <input {...register("email")} />
        <label>Rede Social</label>
        <input {...register("urlSocialMedia")} />
        <label>Data de Nascimento: </label>
        <input type="date" {...register("birth")} />
        <label>Sai de casa em: </label>
        <input type="date" {...register("outSince")} />
        <label>Senha</label>
        <input type="password" {...register("password")} />
        <label>Confirmação de Senha</label>
        <input type="password" {...register("passwordConfirmation")} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
