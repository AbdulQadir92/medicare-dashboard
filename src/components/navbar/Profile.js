import { Link } from 'react-router-dom';
import { ProfileStyled, Top, Middle, Bottom } from "../../styles/components/navbar/Profile.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';


const Profile = ({ profile }) => {
    const { logout } = useContext(AuthContext);

    return (
        <ProfileStyled id="profile" ref={profile}>
            <Top>
                <h3>John Doe</h3>
                <div>Admin</div>
            </Top>
            <Middle>
                <div>
                    <FontAwesomeIcon icon={faUser} data-icon />
                    <Link>My Account</Link>
                </div>
            </Middle>
            <Bottom>
                <div onClick={logout}>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    <span>Log Out</span>
                </div>
            </Bottom>
        </ProfileStyled>
    )
}

export default Profile