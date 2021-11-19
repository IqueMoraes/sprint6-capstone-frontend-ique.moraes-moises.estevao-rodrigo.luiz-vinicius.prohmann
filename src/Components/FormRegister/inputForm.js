import { Box, Grid, Text, VStack, Image, Flex } from "@chakra-ui/react";
import {
  FaEnvelope,
  FaLock,
  FaUserCheck,
  FaGlobeAmericas,
} from "react-icons/fa";
import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router-dom";
import { Input } from "../input";


export const RegisterForm = ({ handleSignIn, errors, register, loading }) => {
  const history = useHistory();
  return (
    
      
      <Grid
        as="form"
        mt="4"
        w={["300px", "400px", "539px"]}
        padding={["5px", "44px"]}
        border="3px solid"
        borderColor="gray.100"
        bg="white"
        borderRadius="40px"
        boxShadow="0px 4px 35px rgba(0, 0, 0, 0.08)"
        position="relative"
        onSubmit={handleSignIn}
      >
        <Text
          position="absolute"
          right="0"
          mt={["10", "5"]}
          pr={["5px","42px"]}
          color="#8D8D8D"
        > Possui uma conta? <br/> <Text onClick={() => history.push("/login")} cursor="pointer" color="#DB7483"> Entrar </Text>
        </Text>
        <Text 
          as="h1"
          fontSize="55px"
          lineHeight="82px"
          fontWeight="500"
          mt={["90px", "90px", "0"]}
          mb="45px"
        > Cadastro 
        </Text>
        <VStack spacing="5" mt="6">
          
          <Box w="100%">
            <Input
              placeholder="Digite seu nome"
              icon={FaUserCheck}
              label="Nome"
              error={errors.name}
              {...register("name")}
            />
            <Input
              placeholder="Digite seu e-mail"
              icon={FaEnvelope}
              label="E-mail"
              {...register("email")}
              type="email"
              error={errors.email}
            />
            {!errors.email && (
              <Text ml="1" mt="1" color="gray.300">
                Exemplo : nome@email.com
              </Text>
            )}
          </Box>

          <Input
            placeholder="Digite sua rede social"
            icon={FaGlobeAmericas}
            label="Rede Social"
            error={errors.urlSocialMedia}
            {...register("urlSocialMedia")}
          />
          <Input
            icon={FaGlobeAmericas}
            type="date"
            label="Data de nascimento"
            error={errors.birth}
            {...register("birth")}
          />
          <Input
            icon={FaGlobeAmericas}
            type="date"
            label="Quando sai de casa"
            error={errors.outSince}
            {...register("outSince")}
          />

          <Input
            placeholder="Digite sua senha"
            icon={FaLock}
            type="password"
            label="Senha"
            error={errors.password}
            {...register("password")}
          />
          <Input
            placeholder="Confirme sua senha"
            icon={FaLock}
            label="Confirmação de senha"
            type="password"
            error={errors.passwordConfirmation}
            {...register("passwordConfirmation")}
          />
        </VStack>
        <VStack mt="4" spacing="5">
          <Button
            isLoading={loading}
            type="submit"
            bgGradient="linear(to-b, bg.200, pink.500)"
            color="white"
            w={["220px", "100%"]}
            h="54px"
            mb="30px"
            mt="40px"
            _hover={{ bgGradient: "linear(to-b,  pink.500, bg.200)" }}
          >
            Entrar
          </Button>
        </VStack>
      </Grid>
      
  );
};
