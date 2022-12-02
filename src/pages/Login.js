import { useState, useContext } from "react";
import { LoginStyled, LoginBrand, Password, Message, LoginInfo, LoginButton, SocialLine, SocialLogin, SocialIcon, SignupLink } from "../styles/pages/Login.styled";
import { Button } from "../styles/components/FormButttons.styled";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import AuthContext from "../contexts/AuthContext";


const Login = () => {
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({});
    const [type, setType] = useState('password');

    const handleChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        setFormData(prevValue => ({ ...prevValue, [name]: value }))
    }

    const handleType = (e) => {
        const target = e.target;
        if (!isNaN(target.value) && (target.value !== '' || target.value === '+')) {
            const temp = target.value;
            target.value = '';
            target.type = 'tel';
            target.value = temp;
        } else if (target.value === '') {
            target.type = 'email';
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {};
        if (formData?.username.startsWith('+')) {
            const username = '0' + formData?.username.substring(3);
            data.username = username;
            data.password = formData.password;
            login(data, setFormData);
        } else {
            login(formData, setFormData);
        }
    }

    return (
        <LoginStyled>
            <div>
                <form onSubmit={handleSubmit}>
                    <LoginBrand>
                        <span>
                            <FontAwesomeIcon icon={faHeartPulse} />
                        </span>
                        <span>MediCare</span>
                    </LoginBrand>
                    <p>Login to your account to continue</p>
                    <section>
                        <div>
                            <label htmlFor="username">Phone / Email</label>
                            <input type="email" id="username" value={formData.username || ''} onChange={(e) => {
                                handleChange(e);
                                handleType(e);
                            }} required />
                        </div>
                        <Password>
                            <label htmlFor="password">Password</label>
                            {type === 'password' && (<>
                                <input type="password" id="password" value={formData.password || ''} onChange={handleChange} required />
                                <span onClick={() => setType('text')} title="Show Password">
                                    <FontAwesomeIcon icon={faEye} />
                                </span>
                            </>)}
                            {type === 'text' && (<>
                                <input type="text" id="password" value={formData.password || ''} onChange={handleChange} required />
                                <span onClick={() => setType('password')} title="Hide Password">
                                    <FontAwesomeIcon icon={faEyeSlash} />
                                </span>
                            </>)}
                            <Message id="loginMsg">Phone/Email or Password is incorrect</Message>
                        </Password>
                    </section>
                    <LoginInfo>
                        <div>
                            <div>
                                <input type="checkbox" id="loggedIn" onChange={() => localStorage.setItem('keepLoggedIn', true)} />
                            </div>
                            <label htmlFor="loggedIn">Keep me logged in</label>
                        </div>
                        <div>
                            <Link to="#">Forgot Password?</Link>
                        </div>
                    </LoginInfo>
                    <LoginButton>
                        <Button type="submit">Login</Button>
                    </LoginButton>
                    {/* <SocialLine>
                        <div></div>
                        <div>Or Login with</div>
                        <div></div>
                    </SocialLine>
                    <SocialLogin>
                        <Button type="button">
                            <SocialIcon>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </SocialIcon>
                            Facebook
                        </Button>
                        <Button type="button">
                            <SocialIcon>
                                <FontAwesomeIcon icon={faGooglePlusG} />
                            </SocialIcon>
                            Google
                        </Button>
                    </SocialLogin> */}
                    <SignupLink>
                        <span>Don't have an account?</span>
                        <Link to="/signup">Sign Up</Link>
                    </SignupLink>
                </form>
            </div>
        </LoginStyled>
    )
}

export default Login