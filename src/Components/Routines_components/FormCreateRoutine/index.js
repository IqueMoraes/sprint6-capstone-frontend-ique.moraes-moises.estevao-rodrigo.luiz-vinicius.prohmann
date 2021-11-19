import { useRoutines } from "../../../Providers/Routines";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import { useAuthToken } from "../../../Providers/AuthToken";
import { useState } from "react";
import { CreateForm } from "./createform";

export const FormCreateRoutine = () => {
  const { createRoutines } = useRoutines();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userId } = useAuthToken();

  const submitCreate = (data) => {
    console.log(data);
    // onClose();
  };

  return (
    <>
      <Button
        bg="#FEA800"
        color="white"
        fontSize="18px"
        lineHeight="27px"
        border="2px solid #FEA800"
        borderRadius="47px"
        mt={4}
        _hover={{ bg: "#FEA800" }}
        onClick={() => {
          onOpen();
        }}
      >
        Criar rotina
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#FEA800" padding="6px">
          <ModalHeader color="white">Criar rotina</ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody bg="white" borderTopRadius="20px" paddingTop="20px">


            <CreateForm />

            
          </ModalBody>
          <ModalFooter bg="white" borderBottomRadius="20px">
            <Button
              bg="#FEA800"
              color="white"
              w="150px"
              mr={4}
              fontSize="18px"
              lineHeight="27px"
              border="2px solid #FEA800"
              borderRadius="47px"
              _hover={{ bg: "#FEA800" }}
            >
              Criar
            </Button>
            <Button
              bg="white"
              color="#FEA800"
              w="150px"
              fontSize="18px"
              lineHeight="27px"
              border="2px solid #FEA800"
              borderRadius="47px"
              onClick={onClose}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
