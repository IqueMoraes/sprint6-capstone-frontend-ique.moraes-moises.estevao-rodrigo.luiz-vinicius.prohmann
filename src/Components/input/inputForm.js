import { Box, Grid, Text, VStack } from "@chakra-ui/layout";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router-dom";
import { Input } from "./index";

export const LoginForm = ({ handleSignIn, errors, register, loading }) => {
  const history = useHistory();
  return (
    <Grid
      as="form"
      mt="4"
      w={["100%", "100%", "100%", "100%"]}
      padding="30px 15px"
      border="3px solid"
      borderColor="gray.100"
      bg="white"
      onSubmit={handleSignIn}
      color="gray.900"
    >
      <Text as="h2" fontWeight="bold">
        Login
      </Text>
      <VStack mt="6" spacing="5">
        <Box w="100%">
          <Input
            placeholder="Digite seu E-mail"
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
          placeholder="Digite sua Senha"
          icon={FaLock}
          type="password"
          label="Senha"
          error={errors.password}
          {...register("password")}
        />
      </VStack>
      <VStack mt="4" spacing="5">
        <Button
          isLoading={loading}
          type="submit"
          bgGradient="linear(to-b, bg.200, pink.500)"
          color="white"
          mt="20px"
          _hover={{ bgGradient: "linear(to-b,  pink.500, bg.200)" }}
        >
          Entrar
        </Button>
        <Text textColor="gray.400" textAlign="center">
          Crie sua conta para agora para começar a usar nosso site.
        </Text>
        <Button
          bg="gray.100"
          color="gray.400"
          onClick={() => history.push("/cadastro")}
          mt="20px"
          _hover={{ background: "gray.200" }}
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
};
