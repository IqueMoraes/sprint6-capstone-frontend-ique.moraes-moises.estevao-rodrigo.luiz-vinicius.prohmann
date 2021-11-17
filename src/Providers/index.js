import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/thema";
import { AchievmentProvider } from "./Achievment";
import { AuthTokenProvider } from "./AuthToken";
import { RoutinesProvider } from "./Routines";
import { UserProfileProvider } from "./UserProfile";

export const Providers = ({ children }) => {
  return (
    <AuthTokenProvider>
      <RoutinesProvider>
        <UserProfileProvider>
          <AchievmentProvider>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
          </AchievmentProvider>
        </UserProfileProvider>
      </RoutinesProvider>
    </AuthTokenProvider>
  );
};
