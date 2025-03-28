import { createContext, ReactNode, useContext, useState } from "react";
import axios from "axios";

interface User {
    user: object | null;
    login: (email: string, password: string) => void;
    signUp: (firstName: string, lastName: string, email: string, password: string) => void;
};

export const UserContext = createContext<User | undefined>(undefined);

interface UserProvider {
    children: ReactNode;
};

export const UserContextProvider = ({ children }: UserProvider) => {
    const [user, setUser] = useState(null);

    const login = (email: string, password: string) => {
        axios.post('http://localhost:9000/api/user/login', {
            email,
            password
        })
            .then((res) => setUser(res.data))
            .catch((err) => console.log("Failed to login", err));
    }

    const signUp = (firstName: string, lastName: string, email: string, password: string) => {
        axios.post('http://localhost:9000/api/user/sign-up', {
            firstName,
            lastName,
            email,
            password
        })
            .then((res) => setUser(res.data))
            .catch((err) => console.log("Failed to sign up", err));
    }

    return (
        <UserContext.Provider value={{ user, login, signUp }}>
            {children}
        </UserContext.Provider>
    )
};

export const useAuth = () => useContext(UserContext);