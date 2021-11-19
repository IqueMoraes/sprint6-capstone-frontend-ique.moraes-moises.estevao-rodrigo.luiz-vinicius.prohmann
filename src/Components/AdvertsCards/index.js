import { Box } from "@chakra-ui/layout";

export const AdvertsCards = ({
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
    <Box
      bg="aliceblue"
      w="100%"
      maxWidth="265px"
      p={5}
      m="10px"
      minHeight="320px"
      maxHeight="320px"
      borderRadius={10}
      display="flex"
      flexDirection="column"
      alignItems="center"
      key={index}
    >
      <Box
        as="h1"
        w="100%"
        minHeight="40px"
        mb={3}
        fontSize={20}
        fontWeight={600}
        textAlign="center"
        lineHeight={1}
      >
        {name}
      </Box>
      <Box as="p">{date}</Box>
      <Box as="p">{localization}</Box>
      <Box as="p">{category}</Box>
      <Box
        maxHeight="150px"
        minHeight="125px"
        w="100%"
        mb="3px"
        bg="bg.300"
        borderRadius="10px"
        p="5px 15px"
        overflow="auto"
      >
        <Box as="p" textAlign="match-parent" m="5px 0">
          {description}
        </Box>
      </Box>
      <Box
        as="botton"
        borderRadius={5}
        bg="bg.200"
        color="white"
        p={2}
        _hover={{ background: "secondary.100" }}
        onClick={() => delet(id)}
      >
        Delete
      </Box>
    </Box>
  );
};
