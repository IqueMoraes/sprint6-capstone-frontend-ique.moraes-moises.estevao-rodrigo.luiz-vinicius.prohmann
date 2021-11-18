import * as yup from "yup";
import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
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
import { Box, Grid } from "@chakra-ui/layout";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AdvertsCards } from "../../Components/AdvertsCards";
import { useAuthToken } from "../../Providers/AuthToken";
import { api } from "../../Services";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAdverts } from "../../Providers/Adverts";

export const Adverts = () => {
  const { authToken, userId } = useAuthToken();
  const { adverts, getAdverts, postAdverts, deletAdverts } = useAdverts();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    getAdverts();
  }, []);

  const formSchema = yup.object().shape({
    name: yup.string().required("Digite um Titulo"),
    localization: yup.string().required("Digite um local"),
    category: yup.string().required("Digite uma Categoria"),
    description: yup.string().required("Digite uma Descrição"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const dataPrototype = new Date();
  const dataNow = `${dataPrototype.getDate()}/${
    dataPrototype.getMonth() + 1
  }/${dataPrototype.getFullYear()} `;

  const submitData = (data) => {
    const advertsData = {
      ...data,
      date: dataNow,
      userId,
    };
    postAdverts(advertsData);
  };
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
            <Grid as="form" onSubmit={handleSubmit(submitData)}>
              <ModalHeader>Crie seu Anuncio:</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Titulo</FormLabel>
                  <Input
                    ref={initialRef}
                    placeholder="Titulo do anuncio"
                    {...register("name")}
                    error={errors.name}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Categoria</FormLabel>

                  <Input placeholder="Categoria" {...register("category")} />
                  {!!errors.category && (
                    <FormErrorMessage>
                      {errors.category.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Local </FormLabel>

                  <Input placeholder="Local" {...register("localization")} />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Descrição </FormLabel>

                  <Input placeholder="Descrição" {...register("description")} />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button
                  bg="bg.200"
                  color="white"
                  mr={3}
                  _hover={{ filter: "brightness(90%)" }}
                  type="submit"
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
            </Grid>
          </ModalContent>
        </Modal>
      </>

      <Box
        as="ul"
        w="100%"
        height="100%"
        display="flex"
        flexWrap="wrap"
        alignItems="flex-start"
        justifyContent="center"
      >
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
            delet={deletAdverts}
          />
        ))}
      </Box>
    </div>
  );
};
