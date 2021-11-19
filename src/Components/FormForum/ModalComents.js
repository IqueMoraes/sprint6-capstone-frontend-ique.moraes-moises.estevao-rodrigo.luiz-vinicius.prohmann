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
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForum } from "../../Providers/Forum";
import { useAuthToken } from "../../Providers/AuthToken";
import { useState } from "react";

export const ModalComents = () => {

  const [comments, setComments] = useState([])

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { createComment } = useForum()

  const { userId, userProfile } = useAuthToken()

  const createCommentsSchema = yup.object().shape({
      message: yup.string().required("Campo obrigatório")
  })

  const { formState: { errors }, register, handleSubmit } = useForm({
      resolver: yupResolver(createCommentsSchema)
  })

  // const createNewComment = (data)  =>  {
  //     const newData =
  //         {
  //             ...data,
  //             userId: userId,
  //             author: userProfile.name
  //         }

  //     setComments({comments: [newData]})
      
      
  // }

  const handleCreateComent = (data) => {
      const newData =
          {
              ...data,
              userId: userId,
              author: userProfile.name
          }

      setComments({comments: [newData]})
      createComment(comments)
      // console.log(comments)
  }
  

  return (
      <>
          <Button 
              bg="#FEA800" 
              color="white" 
              fontSize="18px" 
              lineHeight="27px" 
              border="2px solid #FEA800" 
              borderRadius="47px" 
              _hover={{bg:"#FEA800"}} 
              mt={4} 
              onClick={onOpen}
          >Comentar
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered >
              <ModalOverlay />
              <ModalContent bg="#FEA800" padding="6px" as="form" onSubmit={handleSubmit(handleCreateComent)}>
              <ModalHeader color="white">Adicionar comentário</ModalHeader>
              <ModalCloseButton color="white" />
              <ModalBody bg="white" borderTopRadius="20px">
                  <VStack spacing="4" mt="3">
                      <Textarea
                          rows="10"
                          placeholder="Escreva seu comentário"
                          type="text"
                          {...register("message")}
                          errors={(errors.message?.message)}
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
                      _hover={{bg:"#FEA800"}}
                      type="submit"
                  >Enviar
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
                  >Cancelar
                  </Button>
              </ModalFooter>
              </ModalContent>
          </Modal>
      </>
  )
}
