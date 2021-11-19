import { Flex } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/layout";

import { FormRegister } from "../../Components/FormRegister";

export const Register = () => {
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
