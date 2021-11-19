import {
  Button,
  Box,
  Text,
  Checkbox,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useRoutines } from "../../../Providers/Routines";
import { DeleteIcon } from "@chakra-ui/icons";

import { useEffect } from "react";
import { useAuthToken } from "../../../Providers/AuthToken";
import { useUserProfile } from "../../../Providers/UserProfile";

export const RoutineCard = () => {
  const [isOpenDelete, setIsOpenDelete] = React.useState(false);
  const onCloseDelete = () => setIsOpenDelete(false);
  const cancelRef = React.useRef();
  const [idToDelete, setIdToDelete] = useState(0);
  const [todaysRoutine, setTodaysRoutine] = useState({});

  const { isOpen, onClose } = useDisclosure();
  const { userProfile } = useAuthToken();
  const { EditProfile } = useUserProfile();
  const {
    userRoutines,
    editRoutine,
    deleteRoutine,
    completedTaskNumber,
    setCompletedTaskNumber,
  } = useRoutines();

  const monthList = [
    "índiceZero",
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  const handleEdit = (routineId) => {
    editRoutine(routineId);
    onClose();
  };

  const handleDelete = (id) => {
    deleteRoutine(id);
    onCloseDelete();
  };

  const handleComplete = (routine, task) => {
    console.log(routine);

    const checked = task;
    checked.isCompleted = true;
    const dataTasks = routine.tasks.filter(
      (item) => item.taskId !== task.taskId
    );
    const editedTask = [...dataTasks, checked];

    editRoutine(routine, { tasks: editedTask });

    progressBarValue();
  };

  const progressBarValue = () => {
    const today = new Date();
    const matchDay = today.getDate().toString();
    const matchMonth = (today.getMonth() + 1).toString();
    const matchYear = today.getFullYear().toString();

    const matchRoutine = userRoutines?.filter(
      (item) =>
        item.day === matchDay &&
        item.month === matchMonth &&
        item.year === matchYear
    );

    if (matchRoutine.length >= 1) {
      setTodaysRoutine(matchRoutine[0]);

      const completedNumber = matchRoutine[0].tasks.filter((task) => {
        return task.isCompleted !== false;
      }).length;
      setCompletedTaskNumber(completedNumber);
    } else return null;
  };

  useEffect(() => {
    progressBarValue();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    progressBarValue();
    const jsonBody = { points: userProfile.points + 15 };
    if (completedTaskNumber === 5) {
      EditProfile(jsonBody, "Parabéns! Você ganhou 15 pontos!");
      handleDelete(todaysRoutine.id);
    }
    // eslint-disable-next-line
  }, [completedTaskNumber]);

  return (
    <>
      {userRoutines &&
        userRoutines
          .sort((a, b) => a.day - b.day)
          .map((routineDay) => {
            return (
              <Box as="section" display="flex" key={routineDay.id}>
                <Box
                  display="flex"
                  alignItems="center"
                  flexWrap="wrap"
                  margin="10"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  w="100%"
                  position="relative"
                  borderRadius="20px"
                  p="15px"
                  borderTop="3px solid #FEA800"
                  bgColor="white"
                >
                  <Flex
                    flexDirection="column"
                    mr="5"
                    border="1px solid #573353"
                    borderRadius="24px"
                    w="100px"
                    h="100px"
                  >
                    <Text
                      backgroundColor="#1B2357"
                      color="#FEA800"
                      borderTopRadius="24px"
                      h="41px"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      fontSize="18px"
                      textTransform="uppercase"
                    >
                      {monthList[Number(routineDay.month)]}
                    </Text>
                    <Text
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      h="59px"
                      fontSize="32px"
                    >
                      {" "}
                      {routineDay.day}{" "}
                    </Text>
                  </Flex>
                  <Flex direction="column" flexGrow="1">
                    {routineDay.tasks
                      ?.filter((task) => !!task.description)
                      .map((task) => (
                        <Flex key={task.taskId}>
                          <Checkbox
                            isChecked={task.isCompleted}
                            isDisabled={routineDay.id !== todaysRoutine.id}
                            onChange={() => handleComplete(routineDay, task)}
                          />
                          <Text marginLeft="15px">
                            {" "}
                            {task.startTime} - {task.endTime} {task.description}{" "}
                          </Text>
                        </Flex>
                      ))}
                  </Flex>

                  <Flex
                    minWidth="80px"
                    p="0px"
                    alignSelf="flex-start"
                    justifyContent="space-between"
                  >
                    {/* <Box cursor="pointer">
                      <EditIcon w="6" h="6" onClick={onOpen} />
                    </Box> */}
                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Editar</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <p> entrar o formulário de edição </p>
                        </ModalBody>

                        <ModalFooter>
                          <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Cancelar
                          </Button>
                          <Button
                            colorScheme="teal"
                            size="sm"
                            onClick={() => handleEdit(routineDay.id)}
                          >
                            Editar
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>

                    <Box cursor="pointer">
                      <DeleteIcon
                        w="6"
                        h="6"
                        onClick={() => {
                          setIdToDelete(routineDay.id);
                          setIsOpenDelete(true);
                        }}
                      />
                    </Box>
                  </Flex>
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
                          <Button
                            colorScheme="red"
                            onClick={() => {
                              handleDelete(idToDelete);
                            }}
                            ml={3}
                          >
                            Excluir
                          </Button>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialogOverlay>
                  </AlertDialog>
                </Box>
              </Box>
            );
          })}
    </>
  );
};
