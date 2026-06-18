import { createContext, useContext, useEffect, useState } from "react";

// This interface describes what a user account looks like.
// Every account must contain these pieces of information.
interface UserAccount {
    name: string;
    email: string;
    password: string;
    accountType: "customer" | "vendor";
    selectedPlan: string;
}

// This interface describes everything the authentication system
// makes available to the rest of the application.
interface AuthContextType {
    currentUser: UserAccount | null;
    createAccount: (account: UserAccount) => void;
    login: (email: string, password: string) => boolean;
    logout: () => void;
}

// Create a Context that can share authentication data
// across the entire application without passing props
// through every component.
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {

    // State keeps track of the currently logged-in user.
    // null means nobody is logged in.
    const [currentUser, setCurrentUser] = useState<UserAccount | null>(null);

    // When the application loads, check localStorage to see
    // if a user was previously logged in and restore that session.
    useEffect(() => {
        const savedUser = localStorage.getItem("currentUser");

        if (savedUser) {
            setCurrentUser(JSON.parse(savedUser));
        }
    }, []);

    // Save a newly created account into localStorage.
    // This acts as a simple database for the project.
    const createAccount = (account: UserAccount) => {
        localStorage.setItem("neighborGoodsAccount", JSON.stringify(account));
    };

    // Check whether the entered email and password match
    // the saved account information.
    const login = (email: string, password: string) => {
        const savedAccount = localStorage.getItem("neighborGoodsAccount");

        if (!savedAccount) {
            return false;
        }

        const account: UserAccount = JSON.parse(savedAccount);

        // If credentials match, save the user as the current user
        // and update React state so the UI changes immediately.
        if (account.email === email && account.password === password) {
            localStorage.setItem("currentUser", JSON.stringify(account));
            setCurrentUser(account);
            return true;
        }

        return false;
    };

    // Remove the current user from localStorage and reset state.
    // This effectively signs the user out.
    const logout = () => {
        localStorage.removeItem("currentUser");
        setCurrentUser(null);
    };

    // Provide authentication data and functions to every component
    // wrapped inside AuthProvider.
    return (
        <AuthContext.Provider
            value={{ currentUser, createAccount, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook that gives components easy access
// to the authentication context.
export function useAuth() {
    const context = useContext(AuthContext);

    // Prevents useAuth from being used outside of AuthProvider.
    // Without the provider, the authentication system would not exist.
    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }

    return context;
}