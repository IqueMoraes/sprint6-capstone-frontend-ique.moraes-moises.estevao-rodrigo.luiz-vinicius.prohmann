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
  Input,
  Flex,
  Text,
  VStack,
  Select,
  Textarea
} from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForum } from "../../Providers/Forum"



export const ModalCreateTopic = () => {

    const createTopicSchema = yup.object().shape({
        subject: yup.string().required("Campo obrigatório"),
        category: yup.string().required("Selecione uma opção"),
        text: yup.string().required("Campo obrigatório"),
        assistantSites: yup.string()
    })

    const { formState: { errors }, register, handleSubmit } = useForm({
        resolver: yupResolver(createTopicSchema)
    })


    const { isOpen, onOpen, onClose } = useDisclosure()

    const { createTopic } = useForum()
 

    const handleCreateTopic = (data) => {
        console.log(data)
        createTopic()
        // onClose()
    };

    return (
    <>
        <Button bg="#FEA800" color="white" fontSize="18px" lineHeight="27px" border="2px solid #FEA800" borderRadius="47px" _hover={{bg:"#FEA800"}} mt={4} onClick={onOpen}>
            Criar tópico
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent bg="#FEA800" padding="6px" as="form" onSubmit={handleSubmit(handleCreateTopic)}>
            <ModalHeader color="white">Criar tópico</ModalHeader>
            <ModalCloseButton color="white" />
            <ModalBody bg="white" borderTopRadius="20px">
                <VStack spacing="4" mt="3">
                    {/* <Text> Qual seu nome? </Text>
                    <Input
                        placeholder="Seu nome"
                        type="text"
                        {...register("author")}
                        errors={(errors.author?.message)}
                    />
                     <span style={{color: "red" , fontSize:"10px"}}> {errors.author?.message} </span> */}
                    <Text> Assunto </Text>
                    <Input
                        placeholder="Assunto"
                        type="text"
                        {...register("subject")}
                        errors={(errors.subject?.message)}
                    />
                     <span style={{color: "red" , fontSize:"10px"}}> {errors.subject?.message} </span>
                    <Text> Categoria </Text>
                    <Select placeholder="Selecione uma opção" size="md" {...register("category")}>
                        <option value="Elétrica">Elétrica</option>
                        <option value="Limpeza">Limpeza</option>
                        <option value="Organização">Organização</option>
                        <option value="Hidráulica">Hidráulica</option>
                        <option value="Contas">Contas</option>
                    </Select>
                    <span style={{color: "red" , fontSize:"10px"}}> {errors.category?.message} </span>
                    <Text> Texto </Text>
                    <Textarea
                        placeholder="Texto"
                        type="text"
                        {...register("text")}
                        size="sm"
                        errors={(errors.text?.message)}
                    />
                     <span style={{color: "red" , fontSize:"10px"}}> {errors.text?.message} </span>
                    <Text> Links auxiliares </Text>
                    <Input
                        placeholder="assistantSites"
                        type="text"
                        {...register("assistantSites")}
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
                    onClick={() => {}}
                    >Salvar 
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
)}
