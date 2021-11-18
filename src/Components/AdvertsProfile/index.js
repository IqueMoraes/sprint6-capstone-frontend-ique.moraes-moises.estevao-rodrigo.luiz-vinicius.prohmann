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
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Descrição:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{description}</ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>

      <Flex bg="white" borderRadius="10px" alignItems="center" mt="5px">
        <Flex
          m="0 10px"
          minWidth="100px"
          onClick={onOpen}
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
        >
          <Badge>{category} </Badge>
        </Flex>
        <Box
          m="0 10px"
          minWidth="100px"
          onClick={onOpen}
          fontSize="14px"
          cursor="pointer"
        >
          {name}
        </Box>
        <Box
          m="0 10px"
          minWidth="100px"
          onClick={onOpen}
          fontSize="14px"
          fontWeight="Bold"
          cursor="pointer"
        >
          {localization}
        </Box>

        <Box
          m="0 10px"
          minWidth="100px"
          onClick={onOpen}
          fontSize="14px"
          cursor="pointer"
        >
          {date}
        </Box>

        <FaTrashAlt
          m="0 10px"
          minWidth="20px"
          onClick={() => delet(id)}
          cursor="pointer"
        />
      </Flex>
    </Box>
  );
};
