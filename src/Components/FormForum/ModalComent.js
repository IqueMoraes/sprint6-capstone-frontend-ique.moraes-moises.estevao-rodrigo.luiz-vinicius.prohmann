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
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const ModalComent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const createTopicSchema = yup.object().shape({
    comment: yup.string().required("Campo obrigatório"),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(createTopicSchema),
  });

  const handleCreateComent = (data) => {
    console.log(data);
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
        _hover={{ bg: "#FEA800" }}
        mt={4}
        onClick={onOpen}
      >
        Comentar
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent
          bg="#FEA800"
          padding="6px"
          as="form"
          onSubmit={handleSubmit(handleCreateComent)}
        >
          <ModalHeader color="white">Adicionar comentário</ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody bg="white" borderTopRadius="20px">
            <VStack spacing="4" mt="3">
              <Textarea
                rows="10"
                placeholder="Escreva seu comentário"
                type="text"
                {...register("comment")}
                errors={errors.comment?.message}
              />
            </VStack>
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
              type="submit"
            >
              Enviar
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
