import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/thema";
import { AuthTokenProvider } from "./AuthToken";
import { RoutinesProvider } from "./Routines";

export const Providers = ({ children }) => {
  return (
    <AuthTokenProvider>
      <RoutinesProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </RoutinesProvider>
    </AuthTokenProvider>
  );
};
