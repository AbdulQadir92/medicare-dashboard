import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(true);
    const navigate = useNavigate();

    const signup = (formData) => {
        if (formData.password1 !== formData.password2) {
            const data = { message: 'Passwords do not match' };
            signupMessage(data, null, null);
        } else {
            navigate('/');
        }
    }

    const signupMessage = (data) => {
        if (data.message === 'Passwords do not match') {
            const passwords = document.querySelector('#passwords');
            passwords.style.display = 'block';
            setTimeout(() => {
                passwords.style.display = 'none';
            }, 10000)
        }
    }

    const login = () => {
        navigate('/');
    }

    const logout = () => {
        navigate('/login');
    }


    const contextData = {
        signup,
        login,
        logout,
        user
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
} 