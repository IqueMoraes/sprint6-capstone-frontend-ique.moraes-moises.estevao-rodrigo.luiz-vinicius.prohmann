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
} from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/core";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react"


export const Achievments = () => {
  const { achievmentsList, AddAchievments, RemoveAchievments } =
    useAchievment();
  const { userProfile } = useAuthToken();
  const [achievmentInfo, setAchievmentInfo] = useState({});
  const userList = userProfile.achievments;
  console.log();

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
    if (userList.includes(achievmentInfo)) {
      RemoveAchievments(achievmentInfo);
    } else {
      AddAchievments(achievmentInfo);
    }
  };

  const isAlreadyCHecked = () => userList.includes(achievmentInfo);


    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const initialRef = React.useRef()
    const finalRef = React.useRef()


  return (
    <div>
      <div>
        <h2>Conquistas</h2>
        <h3>
          {userList.length}/{achievmentsList.length}
        </h3>
      </div>
      <div>
        <ul>
          {achievmentsList.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                onOpen();
                setAchievmentInfo(item);
                
              }}
            >
              <AchievmentCard category={item.category} title={item.title} />
            </li>
          ))}
        </ul>
      </div>
      
      <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button>

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
            <FormControl>
              <FormLabel>{achievmentInfo.title}</FormLabel>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Checkbox size="lg" colorScheme="orange" defaultIsChecked={isAlreadyCHecked()}>
    Checkbox
  </Checkbox>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Salvar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
