import { AuthTOkenProvider } from "./AuthToken";
import { RoutinesProvider } from "./Routines";

export const Providers = ({ children }) => {
  return (

    <AuthTOkenProvider>
      <RoutinesProvider>
        {children}
      </RoutinesProvider>
    </AuthTOkenProvider>
  ) 
};
