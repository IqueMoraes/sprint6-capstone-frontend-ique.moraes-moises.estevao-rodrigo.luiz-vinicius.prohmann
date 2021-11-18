import { Box, Heading, Flex } from "@chakra-ui/react";
import { useRoutines } from "../../Providers/Routines";
import { RoutineCard } from "../../Components/Routines_components/RoutineCard";
import { FormRoutine } from "../../Components/Routines_components/FormCreateRoutine";
import ProgressBar from "@ramonak/react-progress-bar";

export const Routines = () => {
  const { completedTaskNumber } = useRoutines();

  return (
    <Box>
      <Flex as="section" justifyContent="space-between">
        <Heading as="h1" color="#FEA800">
          Minha rotina
        </Heading>

        <Flex direction="column">
          <Heading as="h4" size="20px" textAlign="center">
            Concluído de hoje
          </Heading>
          <ProgressBar
            completed={`${completedTaskNumber}`}
            maxCompleted="5"
            customLabel={`${completedTaskNumber}`}
            bgColor="#573353"
            baseBgColor="#B1AFE9"
            width="150px"
            height="22px"
            labelSize="14px"
          />
        </Flex>

        <FormRoutine />

      </Flex>
      <Box as="section">

        <RoutineCard />

      </Box>
    </Box>
  );
};
