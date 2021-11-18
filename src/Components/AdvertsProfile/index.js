import { useDisclosure } from "@chakra-ui/hooks";
import { Badge, Box, Flex, Grid } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Descrição:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{description}</ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>

      <Grid
        templateColumns="repeat(6, 1fr)"
        gap={6}
        bg="white"
        borderRadius="10px"
        alignItems="center"
        mt="5px"
      >
        <Flex
          onClick={onOpen}
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
        >
          <Badge>{category} </Badge>
        </Flex>
        <Box onClick={onOpen} fontSize="14px" cursor="pointer">
          {name}
        </Box>
        <Box
          onClick={onOpen}
          fontSize="14px"
          fontWeight="Bold"
          cursor="pointer"
        >
          {localization}
        </Box>

        <Box onClick={onOpen} fontSize="14px" cursor="pointer">
          {date}
        </Box>

        <FaTrashAlt onClick={() => delet(id)} cursor="pointer" />
      </Grid>
    </>
  );
};
