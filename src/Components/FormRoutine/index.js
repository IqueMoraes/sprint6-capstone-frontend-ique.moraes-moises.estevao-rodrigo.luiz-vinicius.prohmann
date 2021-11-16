import { useRoutines } from "../../Providers/Routines";

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
  VStack
} from "@chakra-ui/react"



export const FormRoutine = () => {
  const {
    setDescription,
    setDate,
    setTimeStart,
    setTimeFinish,
    createRoutines,
  } = useRoutines();


  const { isOpen, onOpen, onClose } = useDisclosure()


  const handleCreateRoutine = () => {
    createRoutines()
    onClose()
  };

return (
  <>
      <Button bg="#FEA800" color="white" fontSize="18px" lineHeight="27px" border="8px solid #FEA800" borderRadius="47px" mt={4} onClick={onOpen}>
        Criar rotina
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#FEA800" padding="6px">
          <ModalHeader color="white">Criar rotina</ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody bg="white" borderTopRadius="20px">
            <Text> Dia </Text>
            <Input
              placeholder="Dia"
              type="date"
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <Flex alignItems="center">
              <Text> De: </Text>
            <Input
              placeholder="Horário"
              type="time"
              onChange={(e) => setTimeStart(e.target.value)}
              required
              min={Date.now()}
            />
            <Text> Até: </Text>
            <Input
              placeholder="Horário"
              type="time"
              onChange={(e) => setTimeFinish(e.target.value)}
              required
            />
            <Text> Descrição </Text>
            <Input
              placeholder="Descrição"
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            </Flex>
          </ModalBody>
          <ModalFooter bg="white" borderBottomRadius="20px">
            <Button bg="#FEA800" color="white" w="150px" mr={4} fontSize="18px" lineHeight="27px" border="8px solid #FEA800" borderRadius="47px" onClick={handleCreateRoutine}> Criar </Button>
            <Button bg="white" color="#FEA800" w="150px" fontSize="18px" lineHeight="27px" border="2px solid #FEA800" borderRadius="47px" onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
)}
