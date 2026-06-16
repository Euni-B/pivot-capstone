import { createContext, useContext, useEffect, useState } from "react";

// Shape of one saved user account
interface UserAccount {
    name: string;
    email: string;
    password: string;
    accountType: "customer" | "vendor";
    selectedPlan: string;
}

// Shape of tools available everywhere
interface AuthContextType {
    currentUser: UserAccount | null;
    createAccount: (account: UserAccount) => void;
    login: (email: string, password: string) => boolean;
    logout: () => void;
}

// Creates the auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [currentUser, setCurrentUser] = useState<UserAccount | null>(null);

    // Loads logged-in user when page refreshes
    useEffect(() => {
        const savedUser = localStorage.getItem("currentUser");

        if (savedUser) {
            setCurrentUser(JSON.parse(savedUser));
        }
    }, []);

    // Saves a new account
    const createAccount = (account: UserAccount) => {
        localStorage.setItem("neighborGoodsAccount", JSON.stringify(account));
    };

    // Logs in an existing account
    const login = (email: string, password: string) => {
        const savedAccount = localStorage.getItem("neighborGoodsAccount");

        if (!savedAccount) {
            return false;
        }

        const account: UserAccount = JSON.parse(savedAccount);

        if (account.email === email && account.password === password) {
            localStorage.setItem("currentUser", JSON.stringify(account));
            setCurrentUser(account);
            return true;
        }

        return false;
    };

    // Logs user out
    const logout = () => {
        localStorage.removeItem("currentUser");
        setCurrentUser(null);
    };

    return (
        <AuthContext.Provider
            value={{ currentUser, createAccount, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook to use auth tools
export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }

    return context;
}