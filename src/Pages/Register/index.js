import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Flex } from "@chakra-ui/react";
import { FormLogin } from "../../Components/FormLogin";
import { VStack } from "@chakra-ui/layout";

import { useAuthToken } from "../../Providers/AuthToken/index";

import { FormRegister } from "../../Components/FormRegister";

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
  const { setUserInfo } = useAuthToken();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  console.log(errors);

  return (
    <div>
      <Flex
        height="100%"
        p="25px"
        bgGradient="linear(to-r, bg.200 60%, white 40%)"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          padding="15px 15px"
          height={["auto", "auto"]}
        >
          <Flex
            w={["100%", "100%", "90%", "90%"]}
            flexDirection={["column", "column", "row", "row"]}
            justifyContent="center"
            alignItems="center"
          >
            <VStack spacing="6">
              <FormRegister />
            </VStack>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};
