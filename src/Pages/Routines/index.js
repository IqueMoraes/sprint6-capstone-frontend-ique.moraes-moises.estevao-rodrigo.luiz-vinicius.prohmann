import { Box, Heading, Button, Text, Flex } from "@chakra-ui/react";
import { useRoutines } from "../../Providers/Routines";
import { RoutineCard } from "../../Components/FormRoutine/RoutineCard";
import { FormRoutine } from "../../Components/FormRoutine";

export const Routines = () => {

  const { userRotines, deleteRoutine } = useRoutines()
  console.log(userRotines)
  return (
    <Box>
      <Flex as="section" justifyContent="space-between">
        <Heading as="h1" color="#FEA800"> Minha rotina </Heading>
        <FormRoutine />
      </Flex>
      <Box as="section">
        <RoutineCard />
    
      </Box>
    </Box>
  );
};
