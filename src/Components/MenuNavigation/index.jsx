import React from "react";
import { Link } from "react-router-dom";
import { useAuthToken } from "../../Providers/AuthToken";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/hooks";

export const NavigationMenu = () => {
  const { handleLogout } = useAuthToken();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        position="absolute"
        right="5px"
        top="5px"
        zIndex="1"
      >
        <HamburgerIcon />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Menu isOpen={isOpen}>
              <MenuList>
                <MenuItem>
                  <Link to="/">App Tchau, mamãe!</Link>
                </MenuItem>
                <MenuDivider />
                <MenuItem>Home</MenuItem>
                <MenuItem>
                  <Link to="/routines" onClick={onClose}>
                    Rotinas
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/forum" onClick={onClose}>
                    Fórum
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/adverts" onClick={onClose}>
                    Anúncios
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/achievments" onClick={onClose}>
                    Conquistas
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </DrawerBody>

          <DrawerFooter>
            <MenuDivider />
            <Button onClick={() => handleLogout()}>Sair</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
