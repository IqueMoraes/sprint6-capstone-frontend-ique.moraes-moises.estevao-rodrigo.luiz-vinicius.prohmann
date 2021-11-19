import React from "react";
import { Link } from "react-router-dom";
import { useAuthToken } from "../../Providers/AuthToken";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
  Heading
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box } from "@chakra-ui/layout";
import { BoxMenu } from "./style";

export const NavigationMenu = () => {
  const { handleLogout } = useAuthToken();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();

  const widthScreen = window.screen.width;

  return (
    <>
      {widthScreen > 768 ? (
        <Box
          position="absolute"
          w="30%"
          h="100vh"
          left={0}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            as="ul"
            w="100%"
            h="90%"
            bg="#e3e3e333"
            borderRadius="0 20px 20px 0"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Heading as="h3" color="#1B2357" fontSize="26px" border="3px solid #FEA800"  borderRadius="40px" padding="8px" fontFamily="Comfortaa">Tchau, mamãe</Heading>
            <BoxMenu>
              <Link to="/dashboard" height="100%" width="100%">
                Home
              </Link>
            </BoxMenu>
            <BoxMenu>
              <Link to="/routines" height="100%" width="100%">
                Rotinas
              </Link>
            </BoxMenu>
            <BoxMenu>
              <Link to="/forum" height="100%" width="100%">
                Fórum
              </Link>
            </BoxMenu>
            <BoxMenu>
              <Link to="/adverts" height="100%" width="100%">
                Anúncios
              </Link>
            </BoxMenu>
            <BoxMenu>
              <Link to="/achievments" height="100%" width="100%">
                Conquistas
              </Link>
            </BoxMenu>
            <Button onClick={() => handleLogout()}>Sair</Button>
          </Box>
        </Box>
      ) : (
        <>
          <Button
            ref={btnRef}
            colorScheme="teal"
            onClick={onOpen}
            position="absolute"
            right="25px"
            top="40px"
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
            {/* <DrawerOverlay /> */}
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

                    <MenuItem>
                      <Link to="/dashboard" onClick={onClose}>
                        Home
                      </Link>
                    </MenuItem>

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
      )}
    </>
  );
};
