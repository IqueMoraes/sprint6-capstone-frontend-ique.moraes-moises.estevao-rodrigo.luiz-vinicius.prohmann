import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/thema";
import { AuthTokenProvider } from "./AuthToken";
import { RoutinesProvider } from "./Routines";
import { ForumProvider } from "./Forum";

export const Providers = ({ children }) => {
  return (
    <AuthTokenProvider>
      <ForumProvider>
        <RoutinesProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </RoutinesProvider>
      </ForumProvider>
    </AuthTokenProvider>
  );
};
