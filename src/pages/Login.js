import { useState, useContext } from "react";
import { LoginStyled, LoginBrand, Message, LoginInfo, LoginButton, SocialLine, SocialLogin, SocialIcon, SignupLink } from "../styles/pages/Login.styled";
import { Button } from "../styles/components/FormButttons.styled";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import AuthContext from "../contexts/AuthContext";


const Login = () => {
    const { login, setKeepLoggedIn } = useContext(AuthContext);
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        setFormData(prevValue => ({ ...prevValue, [name]: value }))
    }

    const handleType = (e) => {
        const target = e.target;
        if (!isNaN(target.value) && target.value !== '' || target.value === '+') {
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
        login(formData, setFormData);
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
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" value={formData.password || ''} onChange={handleChange} required />
                            <Message id="loginMsg">Phone/Email or Password is incorrect</Message>
                        </div>
                    </section>
                    <LoginInfo>
                        <div>
                            <div>
                                <input type="checkbox" id="loggedIn" onChange={() => setKeepLoggedIn(true)} />
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
                    <SocialLine>
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
                    </SocialLogin>
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