import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthToken } from "../../Providers/AuthToken";
import { useState } from "react";
import { RegisterForm } from "./inputForm";

export const FormRegister = () => {
  const { handleRegister } = useAuthToken();
  const [loading, setLoading] = useState(false);

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

  const submitData = (data) => {
    setLoading(true);

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
    handleRegister(sendToRegister);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div>
      <RegisterForm
        errors={errors}
        handleSignIn={handleSubmit(submitData)}
        loading={loading}
        register={register}
      />
    </div>
  );
};
