import { Box, Heading, Flex } from "@chakra-ui/react";
import { useRoutines } from "../../Providers/Routines";
import { RoutineCard } from "../../Components/Routines_components/RoutineCard";
import { FormCreateRoutine } from "../../Components/Routines_components/FormCreateRoutine";
import ProgressBar from "@ramonak/react-progress-bar";

export const Routines = () => {
  const { completedTaskNumber } = useRoutines();

  return (
    <Box >
      <Flex as="section" wrap="wrap" justifyContent="space-between" alignItems="center" p="25px" bg="#1B2357" borderRadius="20px">
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
            baseBgColor="#B1AFE9"
            width="150px"
            height="22px"
            labelSize="14px"
            // #573353
          />
        </Flex>

        <FormCreateRoutine />

      </Flex>
      <Box as="section">

        <RoutineCard />

      </Box>
    </Box>
  );
};
