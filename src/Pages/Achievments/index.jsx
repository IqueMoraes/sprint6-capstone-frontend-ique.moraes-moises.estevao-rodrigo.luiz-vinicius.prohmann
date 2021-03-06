import React, { useState } from "react";
import { AchievmentCard } from "../../Components/Achievments";
import { useAchievment } from "../../Providers/Achievment";
import { useAuthToken } from "../../Providers/AuthToken";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { FormLabel } from "@chakra-ui/form-control";
import { Box, Flex, Heading } from "@chakra-ui/layout";

// import { Input } from "@chakra-ui/input";
import { Text, Button, VStack } from "@chakra-ui/react";
import { BoxMain } from "../../styles/globalStyle";

export const Achievments = () => {
  const { achievmentsList, AddAchievments, RemoveAchievments } =
    useAchievment();
  const { userProfile } = useAuthToken();

  const userList = userProfile.achievments;

  const [achievmentInfo, setAchievmentInfo] = useState({
    title: "Trocar lâmpada",
    category: "eletricity",
    id: 1,
  });

  const translateCategory = () => {
    const cat = achievmentInfo.category;
    if (cat === "cleaning") return "Limpeza";
    else if (cat === "cletricity") return "Elétrica";
    else if (cat === "hydraulic") return "Hidráulica";
    else if (cat === "bills") return "Despesas";
    else if (cat === "cooking") return "Cozinha";
    else if (cat === "maintenance") return "Manutenção";
  };

  const isAlreadyInUser = () => {
    if (userList.some((item) => item.id === achievmentInfo.id)) {
      return true;
    } else {
      return false;
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="flex-end"
      p="0 10px"
    >
      <BoxMain>
        <Box
          w="100%"
          h="12%"
          bg="#ffffff"
          borderBottom="2px solid #e3e3e390"
          textAlign="center"
        >
          <Heading as="h2" fontSize="24px" color="#FEA800">
            Conquistas
          </Heading>
          <Heading as="h3" fontSize="18px" color="#1B2357">
            {userList.length}/{achievmentsList.length}
          </Heading>
        </Box>

        <Box w="100%" h="88%" overflow="auto">
          <Flex overflow="auto" p="15px" wrap="wrap">
            {achievmentsList.map((item) => (
              <AchievmentCard
                key={item.id}
                category={item.category}
                title={item.title}
                onClick={() => {
                  onOpen();
                  setAchievmentInfo(item);
                }}
              />
            ))}
          </Flex>
        </Box>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Conquista</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <VStack mt={4} spacing={5}>
                <Text fontSize="2xl">{achievmentInfo.title}</Text>
                <Text fontSize="xl">{translateCategory()}</Text>

                <FormLabel>15 pontos!</FormLabel>
                {isAlreadyInUser() ? (
                  <Button
                    bg="red"
                    color="white"
                    onClick={() => RemoveAchievments(achievmentInfo)}
                  >
                    Excluir
                  </Button>
                ) : (
                  <Button
                    color="white"
                    bg="green"
                    onClick={() => AddAchievments(achievmentInfo)}
                  >
                    Adicionar
                  </Button>
                )}
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </BoxMain>
    </Flex>
  );
};
