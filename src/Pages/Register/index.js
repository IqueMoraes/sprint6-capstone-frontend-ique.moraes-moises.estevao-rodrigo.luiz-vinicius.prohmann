import { Flex } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/layout";

import { FormRegister } from "../../Components/FormRegister";

export const Register = () => {
  return (
    <div>
      <Flex
        height="100%"
        bg="linear-gradient(to-left, 180deg, rgba(95, 77, 147, 0.85) 0%, rgba(95, 77, 147, 0.85) 0.01%, rgba(219, 116, 131, 0.85) 50%)"
        justifyContent="center"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
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
