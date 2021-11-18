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
} from "@chakra-ui/react";

import { useAuthToken } from "../../Providers/AuthToken";
import { useEffect, useState } from "react";
import { CreateDate } from "../../Providers/Routines/stringfydate";

export const FormRoutine = () => {
  const { createRoutines } = useRoutines();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userId } = useAuthToken();
  // const emptyData = {
  //   year: "",
  //   day: "",
  //   month: "",
  //   tasks: [
  //     {
  //       taskId: 1,
  //       description: "",
  //       startTime: "",
  //       endTime: "",
  //     },
  //     {
  //       taskId: 2,
  //       description: "",
  //       startTime: "",
  //       endTime: "",
  //     },
  //     {
  //       taskId: 3,
  //       description: "",
  //       startTime: "",
  //       endTime: "",
  //     },
  //     {
  //       taskId: 4,
  //       description: "",
  //       startTime: "",
  //       endTime: "",
  //     },
  //     {
  //       taskId: 5,
  //       description: "",
  //       startTime: "",
  //       endTime: "",
  //     },
  //   ],
  //   userId: userId,
  // };
  const [arrayDataTasks, setArrayDataTasks] = useState([
    { taskId: 1, description: "", startTime: "", endTime: "", isCompleted: false },
    { taskId: 2, description: "", startTime: "", endTime: "", isCompleted: false },
    { taskId: 3, description: "", startTime: "", endTime: "", isCompleted: false },
    { taskId: 4, description: "", startTime: "", endTime: "", isCompleted: false },
    { taskId: 5, description: "", startTime: "", endTime: "", isCompleted: false },
  ]);
  const [date, setDate] = useState("");
  const [dataForm, setDataForm] = useState({});

  // PENSAR PRÓXIMA VERSÃO COM CONDIÇÕES DE TASKS POR NÍVEL DO USUÁRIO

  useEffect(() => {
    const { day, month, year } = CreateDate(date);

    setDataForm({
      day: day,
      month: month,
      year: year,
      tasks: arrayDataTasks,
      userId: Number(userId),
    });
  }, [arrayDataTasks]);

  const handleCreateRoutine = () => {
    createRoutines();
    onClose();
  };

  const ChangeDescription = (Id, value) => {
    let usingTask = arrayDataTasks.find((item) => item.taskId === Id);
    usingTask.description = value;
    setArrayDataTasks(
      [...arrayDataTasks.filter((item) => item.taskId !== Id), usingTask].sort(
        (a, b) => a.taskId - b.taskId
      )
    );
  };

  const ChangeStartTime = (Id, value) => {
    let usingTask = arrayDataTasks.find((item) => item.taskId === Id);
    usingTask.startTime = value;
    setArrayDataTasks(
      [...arrayDataTasks.filter((item) => item.taskId !== Id), usingTask].sort(
        (a, b) => a.taskId - b.taskId
      )
    );
  };

  const ChangeEndTime = (Id, value) => {
    let usingTask = arrayDataTasks.find((item) => item.taskId === Id);
    usingTask.endTime = value;
    setArrayDataTasks(
      [...arrayDataTasks.filter((item) => item.taskId !== Id), usingTask].sort(
        (a, b) => a.taskId - b.taskId
      )
    );
  };
  console.log(dataForm)

  return (
    <>
      <Button
        bg="#FEA800"
        color="white"
        fontSize="18px"
        lineHeight="27px"
        border="2px solid #FEA800"
        borderRadius="47px"
        mt={4}
        _hover={{ bg: "#FEA800" }}
        onClick={() => {
          onOpen();
          setDataForm({});
        }}
      >
        Criar rotina
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#FEA800" padding="6px">
          <ModalHeader color="white">Criar rotina</ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody bg="white" borderTopRadius="20px" paddingTop="20px">
            <Text
              bgColor="#1B2357"
              borderRadius="31px"
              p="0px 15px"
              color="white"
              fontSize="20px"
              fontWeight="bold"
            >
              Dia
            </Text>
            <Input
              placeholder="Dia"
              type="date"
              onChange={(e) => setDate(e.target.value)}
              required
              bgColor="#D8D5EA"
            />

            {arrayDataTasks &&
              arrayDataTasks.map((item) => (
                <>
                  <Flex alignItems="center" wrap="wrap" w="100%" m="15px 0">
                    <Text
                      bgColor="#1B2357"
                      borderRadius="31px"
                      p="3px 15px"
                      color="white"
                    >
                      Tarefa {item.taskId}
                    </Text>
                    <Input
                      placeholder="Descrição"
                      type="text"
                      onChange={(e) =>
                        ChangeDescription(item.taskId, e.target.value)
                      }
                      required={true}
                    />
                    <Flex w="100%" alignItems="center" m="8px 0">
                      <Text> De: </Text>
                      <Input
                        placeholder="Horário"
                        type="time"
                        onChange={(e) =>
                          ChangeStartTime(item.taskId, e.target.value)
                        }
                        required={true}
                        min={Date.now()}
                      />
                      <Text> Até: </Text>
                      <Input
                        placeholder="Horário"
                        type="time"
                        onChange={(e) =>
                          ChangeEndTime(item.taskId, e.target.value)
                        }
                        required
                      />
                    </Flex>
                  </Flex>
                </>
              ))}
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
              onClick={() => handleCreateRoutine(dataForm)}
            >
              Criar
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
