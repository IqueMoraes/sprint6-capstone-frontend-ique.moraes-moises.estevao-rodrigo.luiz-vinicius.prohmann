import { Box, Grid, Text, VStack , Flex, Image} from "@chakra-ui/react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router-dom";
import { Input } from "./index";
import imgRightLogin from "../../assets/images/imgRightLogin.png"
import imgLeftLogin from "../../assets/images/imgLeftLogin.png"

export const LoginForm = ({ handleSignIn, errors, register, loading }) => {
  const history = useHistory();
  return (
    <Flex alignItems="center" justifyContent="center" w="100vw">
    <Image src={imgLeftLogin} w="269px" h="269px" display={["none", "none", "none", "block"]} />
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
      onSubmit={handleSignIn}
    >
      <Text 
        as="h1"
        fontSize="55px"
        lineHeight="82px"
        fontWeight="500"
        mt={["90px", "90px", "0"]}
        mb="45px">
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
          w={["220px", "100%"]}
          h="54px"
          mb="30px"
          mt="40px"
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
          onClick={() => history.push("/register")}
          w={["220px", "100%"]}
          h="54px"
          mb="30px"
          mt="40px"
          _hover={{ background: "gray.200" }}
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
    <Image src={imgRightLogin} w="450px" h="450px" display={["none", "none", "none", "none", "block"]}/>
    </Flex>
  );
};
