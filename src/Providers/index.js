import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/thema";
import { AchievmentProvider } from "./Achievment";
import { AuthTokenProvider } from "./AuthToken";
import { RoutinesProvider } from "./Routines";
import { UserProfileProvider } from "./UserProfile";
import { ForumProvider } from "./Forum";
import { AdvertsProvider } from "./Adverts";

export const Providers = ({ children }) => {
  return (
    <AuthTokenProvider>
      <RoutinesProvider>
        <ForumProvider>
          <UserProfileProvider>
            <AchievmentProvider>
              <AdvertsProvider>
                <ChakraProvider theme={theme}>{children}</ChakraProvider>
              </AdvertsProvider>
            </AchievmentProvider>
          </UserProfileProvider>
        </ForumProvider>
      </RoutinesProvider>
    </AuthTokenProvider>
  );
};
