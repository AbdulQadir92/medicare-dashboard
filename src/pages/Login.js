import { useState } from "react";
import { LoginStyled, LoginBrand, LoginInfo, LoginButton, SocialLine, SocialLogin, SocialIcon, SignupLink } from "../styles/pages/Login.styled";
import { Button } from "../styles/components/FormButttons.styled";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';


const Login = () => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        setFormData(prevValue => ({ ...prevValue, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({});
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
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" value={formData.email || ''} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" value={formData.password || ''} onChange={handleChange} required />
                        </div>
                    </section>
                    <LoginInfo>
                        <div>
                            <div>
                                <input type="checkbox" id="loggedIn" />
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