import {
  Button,
  Input,
  Flex,
  Text,
  FormErrorMessage,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CreateDate } from "../../../Providers/Routines/stringfydate";
import { useAuthToken } from "../../../Providers/AuthToken";
import { useRoutines } from "../../../Providers/Routines";

export const CreateForm = ({toClose}) => {
  const { userId } = useAuthToken();
  const { createRoutines } = useRoutines();
  const [tasksNum] = useState([2, 3, 4, 5]);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const treatmentData = (data) => {
    const { day, month, year } = CreateDate(data.date);
    const submitData = {
      year: year,
      day: day,
      month: month,
      tasks: [
        {
          taskId: 1,
          description: data.description1,
          startTime: data.startTime1,
          endTime: data.endTime1,
          isCompleted: false,
        },
        {
          taskId: 2,
          description: data.description2,
          startTime: data.startTime2,
          endTime: data.endTime2,
          isCompleted: false,
        },
        {
          taskId: 3,
          description: data.description3,
          startTime: data.startTime3,
          endTime: data.endTime3,
          isCompleted: false,
        },
        {
          taskId: 4,
          description: data.description4,
          startTime: data.startTime4,
          endTime: data.endTime4,
          isCompleted: false,
        },
        {
          taskId: 5,
          description: data.description5,
          startTime: data.startTime5,
          endTime: data.endTime5,
          isCompleted: false,
        },
      ],
      userId: Number(userId),
    };
    console.log(submitData);
    createRoutines(submitData);
    toClose()
  };

  return (
    <form onSubmit={handleSubmit(treatmentData)}>
      <FormControl
        isInvalid={
          errors.date ||
          errors.description1 ||
          errors.startTime1 ||
          errors.endTime1
        }
      >
        <FormErrorMessage>
          {errors.date && errors.date.message}
        </FormErrorMessage>
        <FormLabel
          htmlFor="routineDay"
          bgColor="#1B2357"
          borderRadius="31px"
          p="0px 15px"
          color="white"
          fontSize="20px"
          fontWeight="bold"
        >
          Data da nova rotina
        </FormLabel>
        <Input
          id="routineDay"
          {...register("date", {
            required: "Data obrigat??ria",
          })}
          placeholder="Dia"
          type="date"
          bgColor="#D8D5EA"
        />

        <Flex alignItems="center" wrap="wrap" w="100%" m="15px 0">
          <Flex>
            <FormLabel
              htmlFor="task1"
              bgColor="#1B2357"
              borderRadius="31px"
              p="3px 15px"
              color="white"
            >
              Tarefa 1
            </FormLabel>
            <FormErrorMessage>{errors.description1?.message}</FormErrorMessage>
          </Flex>
          <Input
            id="task1"
            placeholder="Descri????o"
            type="text"
            {...register("description1", {
              required: "?? necess??rio ao menos uma tarefa na rotina",
            })}
          />
          <Flex w="100%" alignItems="center" m="8px 0">
            <Text> De: </Text>
            <Input
              placeholder="Hor??rio"
              type="time"
              {...register("startTime1", {
                required: "Defina um hor??rio inicial e final",
              })}
            />
            <Text> At??: </Text>
            <Input
              placeholder="Hor??rio"
              type="time"
              {...register("endTime1", {
                required: "Defina um hor??rio inicial e final",
              })}
            />
          </Flex>
          <FormErrorMessage>
            {errors.startTime1?.message || errors.endTime1?.message}
          </FormErrorMessage>
        </Flex>

        {tasksNum &&
          tasksNum.map((item, index) => (
            <>
              <Flex
                alignItems="center"
                wrap="wrap"
                w="100%"
                m="15px 0"
                key={index + 2}
              >
                <FormLabel
                  htmlFor={`task${item}`}
                  bgColor="#1B2357"
                  borderRadius="31px"
                  p="3px 15px"
                  color="white"
                >
                  Tarefa {item}
                </FormLabel>
                <Input
                  id={`task${item}`}
                  placeholder="Descri????o"
                  type="text"
                  {...register(`description${item}`)}
                />

                <Flex w="100%" alignItems="center" m="8px 0">
                  <Text> De: </Text>
                  <Input
                    placeholder="Hor??rio"
                    type="time"
                    {...register(`startTime${item}`)}
                  />
                  <Text> At??: </Text>
                  <Input
                    placeholder="Hor??rio"
                    type="time"
                    {...register(`endTime${item}`)}
                  />
                </Flex>
              </Flex>
            </>
          ))}
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
          isLoading={isSubmitting}
          type="submit"
        >
          Criar
        </Button>
      </FormControl>
    </form>
  );
};
