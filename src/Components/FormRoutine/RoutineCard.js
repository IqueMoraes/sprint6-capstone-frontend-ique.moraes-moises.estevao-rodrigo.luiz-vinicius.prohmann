import { 
    Button, 
    Box, 
    Text, 
    Checkbox,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Input,
    Flex } from "@chakra-ui/react"
import React from "react"
import { useRoutines } from "../../Providers/Routines"
import { AiTwotoneDelete, AiFillEdit } from "react-icons/ai"

export const RoutineCard = () => {

    const [isOpenDelete, setIsOpenDelete] = React.useState(false)
    const onCloseDelete = () => setIsOpenDelete(false)
    const cancelRef = React.useRef()

    const { isOpen, onOpen, onClose } = useDisclosure()

    const {
        userRotines,
        deleteRoutine,
        editRoutine,
        setDate,
        date,
        timeStart,
        setTimeStart,
        timeFinish,
        setTimeFinish,
        description,
        setDescription
      } = useRoutines();

      const handleDelete = (idRoutine) => {
        deleteRoutine(idRoutine)
        onCloseDelete()
      }

      const handleEdit = (idRoutine) => {
        editRoutine(idRoutine)
        onClose()
      }

    return (
        <>
        {
            userRotines.map(item => {
                return <Box as="section" display="flex" key={item.id}>
                            <Box display="flex" margin="10" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)" w="100%" position="relative">
                                <Flex flexDirection="column" mr="5" border="1px solid #573353" borderRadius="24px" w="100px" h="100px"> 
                                    <Text backgroundColor="#1B2357" color="#FEA800" borderTopRadius="48px" h="41px" display="flex" justifyContent="center" alignItems="center" fontSize="18px" textTransform="uppercase"> {item.month} </Text>
                                    <Text display="flex" justifyContent="center" alignItems="center" h="59px" fontSize="32px" > {item.day} </Text>
                                </Flex>
                                <Text> {item.timeStart} - {item.timeFinish} {item.description} </Text>
                                <Box position="absolute" right="30px">
                                    <AiFillEdit mt={4} onClick={onOpen} />
                                </Box>
                                <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>Editar</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                    <Input
                                        placeholder="Dia"
                                        value={date}
                                        type="date"
                                        onChange={(e) => setDate(e.target.value)}
                                        required
                                        />
                                    <Flex alignItems="center">
                                    <Input
                                        placeholder="Horário"
                                        value={timeStart}
                                        type="time"
                                        onChange={(e) => setTimeStart(e.target.value)}
                                        required
                                        />
                                    <Input
                                        placeholder="Horário"
                                        value={timeFinish}
                                        type="time"
                                        onChange={(e) => setTimeFinish(e.target.value)}
                                        required
                                        />
                                    <Input
                                        variant="outline"
                                        placeholder="Descrição"
                                        value={description}
                                        type="text"
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                        />
                                    </Flex>
                                    </ModalBody>
                        
                                    <ModalFooter>
                                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                                        Cancelar
                                    </Button>
                                    <Button colorScheme="teal" size="sm" onClick={() => handleEdit(item.id)}> Editar </Button>
                                    </ModalFooter>
                                </ModalContent>
                                </Modal>
                            
                                <Box position="absolute" right="0">
                                    <AiTwotoneDelete  onClick={() => setIsOpenDelete(true)} />
                                </Box>

                                <AlertDialog
                                    isOpen={isOpenDelete}
                                    leastDestructiveRef={cancelRef}
                                    onClose={onCloseDelete}
                                    >
                                    <AlertDialogOverlay>
                                    <AlertDialogContent>
                                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                                            Cuidado!!!
                                        </AlertDialogHeader>

                                        <AlertDialogBody>
                                            Tem certeza que deseja excluir a rotina?
                                        </AlertDialogBody>

                                        <AlertDialogFooter>
                                        <Button ref={cancelRef} onClick={onCloseDelete}>
                                            Cancelar
                                        </Button>
                                        <Button colorScheme="red" onClick={() => handleDelete(item.id)} ml={3}>
                                            Excluir
                                        </Button>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                    </AlertDialogOverlay>
                                </AlertDialog>
                            
                            </Box>
                        </Box>
            })
        }
        </>
    )
}
            
                