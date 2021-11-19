import { Box, Heading, Flex } from "@chakra-ui/react";
import { useRoutines } from "../../Providers/Routines";
import { RoutineCard } from "../../Components/Routines_components/RoutineCard";
import { FormCreateRoutine } from "../../Components/Routines_components/FormCreateRoutine";
import ProgressBar from "@ramonak/react-progress-bar";
import { BoxMain } from "../../styles/globalStyle";

export const Routines = () => {
  const { completedTaskNumber } = useRoutines();

  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="flex-end"
      p="0 10px"
    >
      <BoxMain>
        <Flex
          as="section"
          h={["39%", "30%"]}
          wrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          p="5px 25px"
          bg="#1B2357"
          borderRadius="10px"
        >
          <Box>
            <Heading as="h1" color="#FEA800">
              Minha rotina
            </Heading>

            <Flex direction="column">
              <Heading as="h4" size="20px" textAlign="center" color="white">
                Concluído de hoje
              </Heading>
              <ProgressBar
                completed={`${completedTaskNumber}`}
                maxCompleted="5"
                customLabel={`${completedTaskNumber}`}
                bgColor="white"
                labelColor="#FEA800"
                baseBgColor="#B1AFE9"
                labelAlignment="left"
                width="150px"
                height="22px"
                labelSize="14px"
                // #573353
              />
            </Flex>
          </Box>

          <FormCreateRoutine />
        </Flex>

        <Box as="section" w="100%" h={["60%", "70%"]} overflow="auto">
          <RoutineCard />
        </Box>
      </BoxMain>
    </Flex>
  );
};
