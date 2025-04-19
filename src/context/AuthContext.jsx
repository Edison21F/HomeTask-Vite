import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verityTokenRequest } from "../api/auth";

export const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setError] = useState([]);

    const signup = async (userData) => {
        try {
            const res = await registerRequest(userData);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error.response?.data);
            setError(
                Array.isArray(error.response?.data)
                    ? error.response.data
                    : [error.response?.data?.message || "Error al registrarse"]
            );
        }
    };

    const signin = async (userData) => {
        try {
            const res = await loginRequest(userData);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error.response?.data);
            setError(
                Array.isArray(error.response?.data)
                    ? error.response.data
                    : [error.response?.data?.message || "Credenciales inválidas"]
            );
        }
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
    };

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => setError([]), 5000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    useEffect(() => {
        async function checkLogin() {
            try {
                const res = await verityTokenRequest(); // no le pases token, ya que las cookies httpOnly se mandan solas
                setUser(res.data);
                setIsAuthenticated(true);
            } catch (error) {
                console.log(error.response?.data);
                logout();
            }
        }
    
        checkLogin();
    }, []);

    const [loading, setLoading] = useState(true); // ← nuevo estado

useEffect(() => {
    async function checkLogin() {
        try {
            const res = await verityTokenRequest();
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            setIsAuthenticated(false);
            setUser(null);
        } finally {
            setLoading(false); // ← termina la carga después de intentar verificar
        }
    }

    checkLogin();
}, []);

    

    return (
        <AuthContext.Provider
            value={{
                user,
                signup,
                signin,
                logout,
                isAuthenticated,
                errors,
                loading, 
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
