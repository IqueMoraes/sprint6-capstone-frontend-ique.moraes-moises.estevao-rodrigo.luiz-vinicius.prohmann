import { Box, Heading, Divider } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/layout";
import { CardTopics } from "../../Components/FormForum/CardTopics";
import { ModalCreateTopic } from "../../Components/FormForum/ModalCreateTopic";
import { Input } from "../../Components/input";
import { useForum } from "../../Providers/Forum";
import { FiSearch } from "react-icons/fi";
import { BoxMain } from "../../styles/globalStyle";

export const Forum = () => {
  const { setSearchTopic } = useForum();

  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="flex-end"
      p="0 10px"
    >
      <BoxMain>
        <Flex
          w="100%"
          h={["40%", "35%"]}
          alignItems="center"
          justifyContent="space-around"
          position="relative"
          flexDirection={["column", "row"]}
          borderBottom="2px solid #e3e3e350"
          mb="10px"
        >
          <Flex
            h="100%"
            alignItems="center"
            justifyContent="space-evenly"
            flexDirection={["column", "column", "column", "row", "row"]}
          >
            <Heading as="h1" color="#FEA800" m="0 10px" fontSize="46px">
              Mural
            </Heading>
            <ModalCreateTopic />
          </Flex>
          <Flex h="100%" alignItems="center">
            <Input
              onChange={(e) => setSearchTopic(e.target.value)}
              placeholder="Buscar por categoria"
              w="250px"
              icon={FiSearch}
            />
          </Flex>
        </Flex>

        <Box
          borderRadius="20px"
          w="100%"
          h={["60%", "65%"]}
          overflow="auto"
          pb="5px"
        >
          <CardTopics />
        </Box>
      </BoxMain>
    </Flex>
  );
};
