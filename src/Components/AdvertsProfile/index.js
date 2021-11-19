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

      <Flex
        bg="#B1AFE970"
        borderRadius="10px"
        alignItems="center"
        mt="5px"
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Flex
          m="0 10px"
          minWidth="150px"
          onClick={onOpen}
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
        >
          <Badge
            p="5px 2px"
            borderRadius="30px"
            textAlign="center"
            minWidth="100%"
            maxWidth="100%"
          >
            {category}
          </Badge>
        </Flex>
        <Box
          m="0 10px"
          minWidth="100px"
          maxWidth="100px"
          onClick={onOpen}
          fontSize="14px"
          cursor="pointer"
        >
          {name}
        </Box>
        <Flex
          m="0 10px"
          minWidth="100px"
          minHeight="50px"
          onClick={onOpen}
          fontSize="14px"
          fontWeight="bold"
          cursor="pointer"
          alignItems="center"
          justifyContent="center"
        >
          {localization}
        </Flex>

        <Flex
          m="0 10px"
          minWidth="100px"
          minHeight="50px"
          onClick={onOpen}
          fontSize="14px"
          cursor="pointer"
          alignItems="center"
          justifyContent="center"
        >
          {date}
        </Flex>

        <Box m="0 10px" minWidth="70px" display="flex" justifyContent="center">
          <FaTrashAlt
            m="0 10px"
            minWidth="20px"
            onClick={() => delet(id)}
            cursor="pointer"
          />
        </Box>
      </Flex>
    </Box>
  );
};
