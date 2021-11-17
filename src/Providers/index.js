import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/thema";
import { AchievmentProvider } from "./Achievment";
import { AuthTokenProvider } from "./AuthToken";
import { RoutinesProvider } from "./Routines";
import { UserProfileProvider } from "./UserProfile";
import { ForumProvider } from "./Forum"

export const Providers = ({ children }) => {
  return (
    <AuthTokenProvider>
      <RoutinesProvider>
      <ForumProvider>
        <UserProfileProvider>
          <AchievmentProvider>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
          </AchievmentProvider>
        </UserProfileProvider>
        </ForumProvider>
      </RoutinesProvider>
    </AuthTokenProvider>
  );
};
