import { useState, useContext } from "react";
import { SignupStyled, SignupBrand, Message, SignupInfo, SignupButton, SocialLine, SocialSignup, SocialIcon, SignupLink } from "../styles/pages/Signup.styled";
import { Button } from "../styles/components/FormButttons.styled";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import AuthContext from "../contexts/AuthContext";


const Signup = () => {
    const { signup } = useContext(AuthContext);
    const [formData, setFormData] = useState({});

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
        signup(formData, setFormData);
    }

    return (
        <SignupStyled>
            <div>
                <form onSubmit={handleSubmit}>
                    <SignupBrand>
                        <span>
                            <FontAwesomeIcon icon={faHeartPulse} />
                        </span>
                        <span>MediCare</span>
                    </SignupBrand>
                    <p>Sign Up in a few steps</p>
                    <section>
                        <div>
                            <label htmlFor="username">Phone / Email</label>
                            <input type="email" id="username" value={formData.username || ''} onChange={(e) => {
                                handleChange(e);
                                handleType(e);
                            }} required />
                            <Message id="usernameMsg">Account with this Phone Number or Email already exists</Message>
                        </div>
                        <div>
                            <label htmlFor="password1">Password</label>
                            <input type="password" id="password1" value={formData.password1 || ''} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="password2">Confirm Password</label>
                            <input type="password" id="password2" value={formData.password2 || ''} onChange={handleChange} required />
                            <Message id="passwords">Passwords do not match</Message>
                        </div>
                    </section>
                    <SignupInfo>
                        <div>
                            <div>
                                <input type="checkbox" id="loggedIn" required />
                            </div>
                            <label htmlFor="loggedIn">I agree to <Link to="#">Privacy Policy & Terms</Link></label>
                        </div>
                    </SignupInfo>
                    <SignupButton>
                        <Button type="submit">Sign Up</Button>
                    </SignupButton>
                    <SocialLine>
                        <div></div>
                        <div>Or Sign Up with</div>
                        <div></div>
                    </SocialLine>
                    <SocialSignup>
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
                    </SocialSignup>
                    <SignupLink>
                        <span>Already have an account?</span>
                        <Link to="/login">Log in</Link>
                    </SignupLink>
                </form>
            </div>
        </SignupStyled>
    )
}

export default Signup