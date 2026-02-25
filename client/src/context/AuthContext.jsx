import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);


export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    function persistirDados(usuario, token) {
        setUser(usuario);
        setToken(token);
        localStorage.setItem("usuario", JSON.stringify(usuario))
        localStorage.setItem("token", token)
    }

    useEffect(() => {
        const userStorage = localStorage.getItem("usuario");
        const tokenStorage = localStorage.getItem("token");
        if (userStorage && tokenStorage) {
            setUser(JSON.parse(userStorage))
            setToken(tokenStorage);
        }
    }, []);

    function logOut() {

        setUser(null);
        setToken(null);
        localStorage.clear();

    }

    return (
        <AuthContext.Provider value={{ user, token, persistirDados, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}
