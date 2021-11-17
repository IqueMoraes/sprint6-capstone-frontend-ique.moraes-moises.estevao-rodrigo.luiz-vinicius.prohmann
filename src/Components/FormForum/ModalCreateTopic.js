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
  Box,
  Text,
  VStack,
  Select,
  Textarea,
  Flex
} from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForum } from "../../Providers/Forum"
import { useState } from "react";
import { useAuthToken } from "../../Providers/AuthToken";
import { MdRemoveCircle } from "react-icons/md"



export const ModalCreateTopic = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { createTopic } = useForum()

    const { userProfile } = useAuthToken()

    const [inputField, setInputField] = useState([{
        assistantSites: ""
    }])

    const createTopicSchema = yup.object().shape({
        subject: yup.string().required("Campo obrigatório"),
        category: yup.string().required("Selecione uma opção"),
        text: yup.string().required("Campo obrigatório"),
    })

    const { formState: { errors }, register, handleSubmit } = useForm({
        resolver: yupResolver(createTopicSchema)
    })

    const handleInput = (e, index) => { 
        const { name, value } = e.target
        const inputList = [...inputField]
        inputList[index][name] = value

        setInputField(inputList)
    }

    const handleCreateInput = (e) => {
        e.preventDefault()
        setInputField([...inputField, { assistantSites: "" }])
    }

    const handleRemoveInput = (e, index) => {
        e.preventDefault()
        const inputList = [...inputField]
        inputList.splice(index, 1)
        setInputField(inputList)
    }

    const handleCreateTopic = (data) => {
        
        const date = new Date()
        
        const newData = {
            ...data,
            author: userProfile.name,
            date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
            comments: [],
            likes: 0,
            important: 0,
            assistantSites: inputField
        }
        
        createTopic(newData)
        onClose()
    };

    return (
        <>
            <Button bg="#FEA800" color="white" fontSize="18px" lineHeight="27px" border="2px solid #FEA800" borderRadius="47px" _hover={{bg:"#FEA800"}} mt={4} onClick={onOpen}>
                Criar tópico
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent bg="#FEA800" padding="6px" as="form" onSubmit={handleSubmit(handleCreateTopic)}>
                <ModalHeader color="white"> Criar tópico </ModalHeader>
                <ModalCloseButton color="white" />
                <ModalBody bg="white" borderTopRadius="20px">
                    <VStack spacing="4" mt="3">
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
                            size="md"
                            errors={(errors.text?.message)}
                        />
                        <span style={{color: "red" , fontSize:"10px"}}> {errors.text?.message} </span>
                        <Text> Links auxiliares </Text>
                        <VStack spacing="3">

                            {
                                inputField.map((item, index) => {
                                    return (
                                        <Flex key={index}>
                                            <Input
                                                name="assistantSites"
                                                placeholder="Link adicional"
                                                type="text"
                                                value={item.assistantSites}
                                                onChange={e => handleInput(e, index)}
                                            />
                                            {
                                                index > 0 && <MdRemoveCircle onClick={e => handleRemoveInput(e, index)}/> 
                                            }
                                        </Flex>
                                    )
                            }) 
                            }
                            <Button onClick={e => handleCreateInput(e)}> Adicionar link </Button>
                        </VStack>
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
