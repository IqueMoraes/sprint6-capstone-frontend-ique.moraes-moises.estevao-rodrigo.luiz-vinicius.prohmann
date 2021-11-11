import { AuthTokenProvider } from "./AuthToken";
import { RoutinesProvider } from "./Routines";

export const Providers = ({ children }) => {
  return (
    <AuthTokenProvider>
      <RoutinesProvider>{children}</RoutinesProvider>
    </AuthTokenProvider>
  );
};
