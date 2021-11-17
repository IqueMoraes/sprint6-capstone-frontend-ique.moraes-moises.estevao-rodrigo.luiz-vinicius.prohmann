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
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/hooks";



export const NavigationMenu = () => {
  const { handleLogout } = useAuthToken();

  const { isOpen, onOpen, onClose } = useDisclosure()

  const btnRef = React.useRef()

  return (
    <>
      <ul style={{ marginBottom: "30px" }}>
        <li>
          <Link to="/dashboard">Home</Link>
        </li>
        <li>
          <Link to="/routines">Rotinas</Link>
        </li>
        <li>
          <Link to="/forum">Fórum</Link>
        </li>
        <li>
          <Link to="/adverts">Anúncios</Link>
        </li>
        <li>
          <Link to="/members">Membros</Link>
        </li>
        <li>
          <Link to="/achievments">Conquistas</Link>
        </li>
        <h5 onClick={() => handleLogout()} style={{cursor:"pointer"}}>Sair</h5>
      </ul>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <HamburgerIcon/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
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
                <MenuItem><Link to="/">App Tchau, mamãe!</Link></MenuItem>
                <MenuDivider/>
                <MenuItem>Home</MenuItem>
                <MenuItem><Link to="/routines">Rotinas</Link></MenuItem>
                <MenuItem><Link to="/forum">Fórum</Link></MenuItem>
                <MenuItem><Link to="/adverts">Anúncios</Link></MenuItem>
                <MenuItem><Link to="/achievments">Conquistas</Link></MenuItem>
                <MenuItem><Link to="/members">Membros</Link></MenuItem>
                <MenuItem></MenuItem>
                <MenuDivider/>
                <MenuItem onClick={() => handleLogout()}>Sair</MenuItem>
              </MenuList>
            </Menu>

          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Fechar menu
            </Button>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
