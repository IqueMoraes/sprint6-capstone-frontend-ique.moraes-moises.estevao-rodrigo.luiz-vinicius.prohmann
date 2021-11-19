import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthToken } from "../../Providers/AuthToken";
import { LoginForm } from "../input/inputForm";
import { useState } from "react";


export const FormLogin = () => {
  const { handleLogin } = useAuthToken();
  const [loading, setLoading] = useState(false);

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

  const submitData = (data) => {
    setLoading(true);
    handleLogin(data);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div>
      <LoginForm
        errors={errors}
        handleSignIn={handleSubmit(submitData)}
        loading={loading}
        register={register}
      />
    </div>
  );
};
