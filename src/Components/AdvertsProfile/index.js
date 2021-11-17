import { Button } from "@chakra-ui/button";
import { Badge, Box, Flex, Grid } from "@chakra-ui/layout";
import { FaTrashAlt } from "react-icons/fa";
export const AdvertsProfile = ({
  index,
  name,
  date,
  localization,
  category,
  id,
  userId,
  description,
  delet,
}) => {
  return (
    <Grid
      templateColumns="repeat(7, 1fr)"
      gap={6}
      bg="white"
      borderRadius="10px"
      alignItems="center"
      mt="5px"
    >
      <Flex alignItems="center" justifyContent="center">
        <Badge>{category} </Badge>
      </Flex>
      <Box fontSize="14px">{name}</Box>
      <Box fontSize="14px" fontWeight="Bold">
        {localization}
      </Box>
      <Box fontSize="14px"> {category}</Box>
      <Box fontSize="14px">{date} </Box>

      <FaTrashAlt onClick={() => delet(id)} colSpan={1} />
    </Grid>
  );
};
