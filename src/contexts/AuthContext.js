import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';


const AuthContext = createContext();
export default AuthContext;


export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(null);
    const [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);
    const navigate = useNavigate();

    const signup = (formData, setFormData) => {
        fetch('http://127.0.0.1:8000/accounts/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not register user');
                }
                return res.json();
            })
            .then(data => {
                signupMessage(data, formData, setFormData);
            })
            .catch(error => {
                console.log(error)
            })
    }

    const signupMessage = (data, formData, setFormData) => {
        if (data.message === 'Account created successfully') {
            const loginData = {
                username: formData.username,
                password: formData.password1
            }
            login(loginData, setFormData)
        }

        if (data.message === 'Account with this Phone Number or Email already exists') {
            const usernameMsg = document.querySelector('#usernameMsg');
            usernameMsg.style.display = 'block';
            setTimeout(() => {
                usernameMsg.style.display = 'none';
            }, 10000)
        }

        if (data.message === 'Passwords do not match') {
            const passwords = document.querySelector('#passwords');
            passwords.style.display = 'block';
            setTimeout(() => {
                passwords.style.display = 'none';
            }, 10000)
        }
    }

    const login = (formData, setFormData) => {
        fetch('http://127.0.0.1:8000/accounts/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => {
                if (!res.ok) {
                    throw Error('Phone/Email or Password is incorrect');
                }
                return res.json();
            })
            .then(data => {
                if (data.access) {
                    setAuthTokens(data);
                    if (keepLoggedIn) {
                        localStorage.setItem('authTokens', JSON.stringify(data));
                    }
                    setUser(jwt_decode(data.access));
                    setFormData({});
                    navigate('/');
                }
            })
            .catch(error => {
                loginMessage(error.message);
            })
    }

    const loginMessage = (message) => {
        if (message === 'Phone/Email or Password is incorrect') {
            const loginMsg = document.querySelector('#loginMsg');
            loginMsg.style.display = 'block';
            setTimeout(() => {
                loginMsg.style.display = 'none';
            }, 10000)
        }
    }

    const logout = () => {
        setAuthTokens(null);
        localStorage.removeItem('authTokens');
        setUser(null);
        navigate('/login');
    }

    useEffect(() => {

    }, [])

    const contextData = {
        user,
        signup,
        login,
        logout,
        setKeepLoggedIn
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
} 