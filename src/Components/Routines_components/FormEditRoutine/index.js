import {
  // Modal,
  // ModalOverlay,
  // ModalContent,
  // ModalHeader,
  // ModalFooter,
  // ModalBody,
  // ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  FormErrorMessage,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
// import { useRoutines } from "../../Providers/Routines";
import { useForm } from "react-hook-form";

export const ModalEditRoutine = () => {
  // const { userRoutines, editRoutine } = useRoutines();

  // const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function submitEdits(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(data, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit(submitEdits)}>
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="name">First name</FormLabel>
          <Input
            id="name"
            placeholder="name"
            {...register("name", {
              required: "This is required",
              minLength: {
                value: 4,
                message: "Minimum length should be 4",
              },
            })}
          />

          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
};
