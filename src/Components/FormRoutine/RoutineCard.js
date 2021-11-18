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
import { CreateDate } from "../../Providers/Routines/stringfydate"
import { useState } from "react"
import { useEffect } from "react"

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
        setDescription,
        setCompletedTaskNumber
      } = useRoutines();

      const handleDelete = (idRoutine) => {
        deleteRoutine(idRoutine)
        onCloseDelete()
      }

      const handleEdit = (idRoutine) => {
        editRoutine(idRoutine)
        onClose()
      }

      const handleComplete = (idRoutine, taskId) => {
        // editRoutine(idRoutine)
        

        setCompletedTaskNumber(progressBarValue())
      }

      const progressBarValue = () =>{
          const today = new Date();
          const matchDay = today.getDate().toString();
          const matchMonth = (today.getMonth()+1).toString();
          const matchYear = today.getFullYear().toString();
          
          const todaysRoutine = userRotines?.filter(item => item.day === matchDay && item.month === matchMonth && item.year === matchYear)
        if(todaysRoutine.length === 1){
            const completedNumber = todaysRoutine[0].tasks.filter(task=> task.isCompleted).length;
        setCompletedTaskNumber(completedNumber);
        return completedNumber;}
        else{ return 0}
      }

      useEffect(()=> {
          progressBarValue()
      }, [])

      

    return (
        <>
        {
            userRotines
            // .filter(item => {
            //     const today = new Date();
            //     const itemDate = new Date(item.year + item.month + Number(item.day -1));
            //    return itemDate >= today && item
            // })
            .sort((a,b)=> a.day-b.day).map(item => {
                return <Box as="section" display="flex" key={item.id}>
                            <Box display="flex" alignItems="center" flexWrap="wrap" margin="10" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)" w="100%" position="relative" borderRadius="20px" p="15px" borderTop="3px solid #FEA800">
                                <Flex flexDirection="column" mr="5" border="1px solid #573353" borderRadius="24px" w="100px" h="100px"> 
                                    <Text backgroundColor="#1B2357" color="#FEA800" borderTopRadius="24px" h="41px" display="flex" justifyContent="center" alignItems="center" fontSize="18px" textTransform="uppercase"> {item.month} </Text>
                                    <Text display="flex" justifyContent="center" alignItems="center" h="59px" fontSize="32px" > {item.day} </Text>
                                </Flex>
                                <Flex direction="column">
                                {item.tasks?.map(task=>
                                <Flex key={task.taskId}>
                                <Checkbox isChecked={task.isCompleted} onChange={()=> handleComplete(item.id, task.taskId)}/>
                                <Text marginLeft="15px"> {task.startTime} - {task.endTime} {task.description} </Text>
                                </Flex>
                                )}
                                </Flex> 
                                <Box position="absolute" right="45px" cursor="pointer">
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
                            
                                <Box position="absolute" right="15px" cursor="pointer">
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
            
                