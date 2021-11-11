import { UserProvider } from "./User"


export const Providers = ({ children }) => {

    return (
        <UserProvider>
            {children}
        </UserProvider>
    ) 
}