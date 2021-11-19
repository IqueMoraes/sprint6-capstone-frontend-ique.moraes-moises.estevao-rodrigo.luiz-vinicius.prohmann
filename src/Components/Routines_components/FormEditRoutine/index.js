import {
  Button,
  Input,
  FormErrorMessage,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

export const ModalEditRoutine = () => {
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
