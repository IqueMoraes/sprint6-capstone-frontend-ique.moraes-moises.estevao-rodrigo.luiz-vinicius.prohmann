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
    Input
  } from "@chakra-ui/react";
import { useRoutines } from "../../Providers/Routines";


export const ModalEditRoutine = () => {

    const {
        title,
        setTitle,
        date,
        setDate,
        timeStart,
        setTimeStart,
        timeFinish,
        setTimeFinish,
        userRotines,
        createRoutines,
        editRoutine,
        deleteRoutine,
      } = useRoutines();

    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
        <Button mt={4} onClick={onOpen}>
          Criar rotina
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Criar rotina</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Input
              variant="outline"
              placeholder="Título"
              value={title}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              required
              />
            <Input
              placeholder="Dia"
              value={date}
              type="date"
              onChange={(e) => setDate(e.target.value)}
              required
              />
            <Input
              placeholder="Horário"
              value={timeStart}
              type="time"
              onChange={(e) => setTimeStart(e.target.value)}
              required
              min={Date.now()}
              />
            <Input
              placeholder="Horário"
              value={timeFinish}
              type="time"
              onChange={(e) => setTimeFinish(e.target.value)}
              required
              />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="teal" size="sm" onClick={createRoutines}> Criar </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </>
    )
}