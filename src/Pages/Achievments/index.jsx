import React, { useState } from "react";
import { AchievmentCard } from "../../Components/Achievments";
import { useAchievment } from "../../Providers/Achievment";
import { useAuthToken } from "../../Providers/AuthToken";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
// import { Input } from "@chakra-ui/input";
import { Checkbox, Text, Button, Flex } from "@chakra-ui/react";
import { toast } from "react-toastify";

export const Achievments = () => {
  const { achievmentsList, AddAchievments, RemoveAchievments } =
    useAchievment();
  const { userProfile } = useAuthToken();
  const userList = userProfile.achievments;
  console.log(userList);
  const [achievmentInfo, setAchievmentInfo] = useState({
    title: "Trocar lâmpada",
    category: "eletricity",
    id: 1,
  });
  const [changeCheckbox, setChangeCheckbox] = useState(false);

  const translateCategory = () => {
    const cat = achievmentInfo.category;
    if (cat === "cleaning") return "Limpeza";
    else if (cat === "cletricity") return "Elétrica";
    else if (cat === "hydraulic") return "Hidráulica";
    else if (cat === "bills") return "Despesas";
    else if (cat === "cooking") return "Cozinha";
    else if (cat === "maintenance") return "Manutenção";
  };

  const changeInput = () => {
    if (isAlreadyInUser() && !changeCheckbox) {
      RemoveAchievments(achievmentInfo);
    } else if (!isAlreadyInUser() && changeCheckbox) {
      AddAchievments(achievmentInfo);
    } else if (!isAlreadyInUser() && !changeCheckbox) {
      toast.warn("Clique no checkbox para adicionar conquista!");
    } else {
      toast.warn("Você já possui essa conquista.");
    }
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
    <div>
      <div>
        <h2>Conquistas</h2>
        <h3>
          {userList.length}/{achievmentsList.length}
        </h3>
      </div>
      <div>
        <Flex overflow="auto" p="15px" wrap="wrap">
          <ul>

          {achievmentsList.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                  onOpen();
                  setAchievmentInfo(item);
                }}
              >
             <AchievmentCard
            // key={item.id}
            category={item.category}
            title={item.title}
            // onClick={() => {
            //   onOpen();
            //   setAchievmentInfo(item);
            // }}
            />
            </li>
            ))}
            </ul>
        </Flex>
      </div>

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
            <Text fontSize="2xl">{achievmentInfo.title}</Text>
            <Text fontSize="xl">{translateCategory()}</Text>

            <FormControl mt={4}>
              <FormLabel>15 pontos!</FormLabel>
              <Checkbox
                size="lg"
                colorScheme="orange"
                defaultIsChecked={isAlreadyInUser()}
                onChange={() => setChangeCheckbox(!isAlreadyInUser())}
              >
                Habilidade conquistada!
              </Checkbox>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                changeInput();
                onClose();
              }}
            >
              Salvar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
