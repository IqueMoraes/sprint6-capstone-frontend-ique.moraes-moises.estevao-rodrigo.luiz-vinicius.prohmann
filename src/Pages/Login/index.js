import { Flex } from "@chakra-ui/react";
import { FormLogin } from "../../Components/FormLogin";
import { VStack } from "@chakra-ui/layout";
export const Login = () => {
  return (
    <>
      <Flex height="100vh" bgGradient="linear(to-r, bg.200 60%, white 40%)">
        <Flex
          alignItems="center"
          justifyContent="center"
          padding="10px 15px"
          height={["auto", "auto", "100vh", "100vh"]}
        >
          <Flex
            w={["100%", "100%", "90%", "65%"]}
            flexDirection={["column", "column", "row", "row"]}
            justifyContent="center"
            alignItems="center"
          >
            <VStack spacing="6">
              <FormLogin />
            </VStack>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
