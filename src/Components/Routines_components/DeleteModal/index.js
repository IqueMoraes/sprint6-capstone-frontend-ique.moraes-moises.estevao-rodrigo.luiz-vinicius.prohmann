import {
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useRoutines } from "../../../Providers/Routines";

export const DeleteModalExported = (
  isOpenDelete,
  cancelRef,
  onCloseDelete,
  routineId
) => {
  const { deleteRoutine } = useRoutines();

  const handleDelete = () => {
    deleteRoutine(routineId);
    onCloseDelete();
  };

  return (
    <AlertDialogOverlay>
      <AlertDialogContent>
        <AlertDialogHeader fontSize="lg" fontWeight="bold">
          Cuidado!!!
        </AlertDialogHeader>

        <AlertDialogBody>
          Tem certeza que deseja excluir a rotina?
        </AlertDialogBody>

        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onCloseDelete}>
            Cancelar
          </Button>
          <Button
            colorScheme="red"
            onClick={() => handleDelete(routineId)}
            ml={3}
          >
            Excluir
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogOverlay>
  );
};
