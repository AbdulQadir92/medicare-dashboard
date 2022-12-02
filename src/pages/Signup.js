import { useState, useContext } from "react";
import { SignupStyled, SignupBrand, Password, Message, SignupInfo, SignupButton, SocialLine, SocialSignup, SocialIcon, SignupLink } from "../styles/pages/Signup.styled";
import { Button } from "../styles/components/FormButttons.styled";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import AuthContext from "../contexts/AuthContext";


const Signup = () => {
    const { signup } = useContext(AuthContext);
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
            data.password1 = formData.password1;
            data.password2 = formData.password2;
            signup(data, setFormData);
        } else {
            signup(formData, setFormData);
        }
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
                        <Password>
                            <label htmlFor="password1">Password</label>
                            {type === 'password' && (<>
                                <input type="password" id="password1" value={formData.password1 || ''} onChange={handleChange} required />
                                <span onClick={() => setType('text')} title="Show Password">
                                    <FontAwesomeIcon icon={faEye} />
                                </span>
                            </>)}
                            {type === 'text' && (<>
                                <input type="text" id="password1" value={formData.password1 || ''} onChange={handleChange} required />
                                <span onClick={() => setType('password')} title="Hide Password">
                                    <FontAwesomeIcon icon={faEyeSlash} />
                                </span>
                            </>)}
                        </Password>
                        <Password>
                            <label htmlFor="password2">Confirm Password</label>
                            {type === 'password' && (<>
                                <input type="password" id="password2" value={formData.password2 || ''} onChange={handleChange} required />
                                <span onClick={() => setType('text')} title="Show Password">
                                    <FontAwesomeIcon icon={faEye} />
                                </span>
                            </>)}
                            {type === 'text' && (<>
                                <input type="text" id="password2" value={formData.password2 || ''} onChange={handleChange} required />
                                <span onClick={() => setType('password')} title="Hide Password">
                                    <FontAwesomeIcon icon={faEyeSlash} />
                                </span>
                            </>)}
                            <Message id="passwords">Passwords do not match</Message>
                        </Password>
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
                    {/* <SocialLine>
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
                    </SocialSignup> */}
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