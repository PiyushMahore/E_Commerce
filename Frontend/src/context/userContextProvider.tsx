import { createContext, ReactNode, useContext, useState } from "react";
import axios from "axios";

interface User {
    user: any;
    login: (email: string, password: string) => void;
    signUp: (firstName: string, lastName: string, email: string, password: string) => void;
    getCurrentUser: () => void;
    logout: () => void;
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
        }, {
            withCredentials: true
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
        }, {
            withCredentials: true
        })
            .then((res) => setUser(res.data))
            .catch((err) => console.log("Failed to sign up", err));
    }

    const getCurrentUser = () => {
        axios.get('http://localhost:9000/api/user/get-current-user', {
            withCredentials: true
        },)
            .then((res) => setUser(res.data))
            .catch((err) => console.log("User not logged in", err));
    }

    const logout = () => {
        axios.patch('http://localhost:9000/api/user/log-out', {
        }, {
            withCredentials: true
        })
            .then(() => setUser(null))
            .catch((err) => console.log("Failed to logout", err));
    }

    return (
        <UserContext.Provider value={{ user, login, signUp, getCurrentUser, logout }}>
            {children}
        </UserContext.Provider>
    )
};

export const useAuth = () => useContext(UserContext);