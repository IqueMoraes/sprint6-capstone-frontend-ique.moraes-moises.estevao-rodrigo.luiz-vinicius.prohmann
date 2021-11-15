import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { AdvertsCards } from "../../Components/AdvertsCards";
import { useAuthToken } from "../../Providers/AuthToken";
import { api } from "../../Services";

export const Adverts = () => {
  const { authToken, userId } = useAuthToken();
  const [adverts, setAdverts] = useState([]);

  const getAdverts = () => {
    api
      .get("/adverts", {
        headers: { Authorization: "Bearer " + authToken },
      })
      .then((response) => {
        setAdverts(response.data);
      });
  };
  console.log(adverts);
  useEffect(() => {
    getAdverts();
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const dataPrototype = new Date();
  const dataNow = `${dataPrototype.getDate()}/${
    dataPrototype.getMonth() + 1
  }/${dataPrototype.getFullYear()} `;

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <div>
      <>
        <Button
          bg="bg.200"
          color="white"
          onClick={onOpen}
          _hover={{ background: "bg.100" }}
        >
          Criar Anuncio
        </Button>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Crie seu Anuncio:</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Titulo</FormLabel>
                <Input ref={initialRef} placeholder="Titulo do anuncio" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Categoria</FormLabel>

                <Input placeholder="Categoria" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Local </FormLabel>

                <Input placeholder="Categoria" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Descrição </FormLabel>

                <Input placeholder="Categoria" />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                bg="bg.200"
                color="white"
                mr={3}
                _hover={{ filter: "brightness(90%)" }}
              >
                Criar Anuncio
              </Button>
              <Button
                bg="negative.100"
                color="white"
                onClick={onClose}
                _hover={{ filter: "brightness(90%)" }}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>

      {adverts.map((item, index) => (
        <AdvertsCards
          index={index}
          name={item.name}
          date={item.date}
          localization={item.localization}
          category={item.category}
          id={item.id}
          userId={item.userId}
          description={item.description}
        />
      ))}
    </div>
  );
};
