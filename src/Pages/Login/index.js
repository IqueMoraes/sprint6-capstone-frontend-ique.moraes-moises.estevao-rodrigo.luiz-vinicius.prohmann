import { Flex } from "@chakra-ui/react";
import { FormLogin } from "../../Components/FormLogin";
import { VStack } from "@chakra-ui/layout";
export const Login = () => {
  return (
    <>
      <Flex 
        height="100vh" 
        bg="linear-gradient(to-left, 180deg, rgba(95, 77, 147, 0.85) 0%, rgba(95, 77, 147, 0.85) 0.01%, rgba(219, 116, 131, 0.85) 50%)"
        justifyContent="center"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
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
