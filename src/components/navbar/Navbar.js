import { useEffect, useRef } from "react";
import { NavbarStyled, Icon, Search, NavLinks } from "../../styles/components/navbar/Navbar.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faBell, faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import user from '../../images/navbar/user.jpg';
import Messages from "./Messages";
import Notifications from "./Notifications";
import Settings from "./Settings";
import Profile from "./Profile";


const Navbar = () => {
    useEffect(() => {
        document.addEventListener('click', (e) => {
            e.stopPropagation();
            // const inp = document.querySelector('#searchInput');
            // if (!e.target.closest('#searchInput') && inp.classList.contains('active')) {
            //     inp.classList.remove('active');
            //     inp.value = '';
            // }

            if (window.innerWidth < 576) {
                const sidebar = document.querySelector('#sidebar');
                if (!e.target.closest('#sidebar') && sidebar.classList.contains('active')) {
                    sidebar.classList.remove('active');
                }
            }

            const messagesDiv = document.querySelector('#messages');
            if (!e.target.closest('#messages') && messagesDiv.classList.contains('active')) {
                messagesDiv.classList.remove('active');
            }

            const notificationsDiv = document.querySelector('#notifications');
            if (!e.target.closest('#notifications') && notificationsDiv.classList.contains('active')) {
                notificationsDiv.classList.remove('active');
            }

            const settingsDiv = document.querySelector('#settings');
            if (!e.target.closest('#settings') && settingsDiv.classList.contains('active')) {
                settingsDiv.classList.remove('active');
            }

            const profileDiv = document.querySelector('#profile');
            if (!e.target.closest('#profile') && profileDiv.classList.contains('active')) {
                profileDiv.classList.remove('active');
            }
        })
    }, [])

    const messages = useRef();
    const notifications = useRef();
    const settings = useRef();
    const profile = useRef();

    const toggleSidebar = (e) => {
        e.stopPropagation();
        const sidebar = document.querySelector('#sidebar');
        const main = document.querySelector('#main');

        sidebar.classList.toggle('active');
        main.classList.toggle('active');
    }

    const showSearch = (e) => {
        e.stopPropagation();
        const inp = document.querySelector('#searchInput');
        inp.classList.add('active');
        inp.focus();
    }

    const showMessages = (e) => {
        e.stopPropagation();
        messages.current.classList.add('active');

        if (notifications.current.classList.contains('active')) {
            notifications.current.classList.remove('active');
        }
        if (settings.current.classList.contains('active')) {
            settings.current.classList.remove('active');
        }
        if (profile.current.classList.contains('active')) {
            profile.current.classList.remove('active');
        }
    }

    const showNotifications = (e) => {
        e.stopPropagation();
        notifications.current.classList.add('active');

        if (messages.current.classList.contains('active')) {
            messages.current.classList.remove('active');
        }
        if (settings.current.classList.contains('active')) {
            settings.current.classList.remove('active');
        }
        if (profile.current.classList.contains('active')) {
            profile.current.classList.remove('active');
        }
    }

    const showSettings = (e) => {
        e.stopPropagation();
        settings.current.classList.add('active');

        if (messages.current.classList.contains('active')) {
            messages.current.classList.remove('active');
        }
        if (notifications.current.classList.contains('active')) {
            notifications.current.classList.remove('active');
        }
        if (profile.current.classList.contains('active')) {
            profile.current.classList.remove('active');
        }
    }

    const showProfile = (e) => {
        e.stopPropagation();
        profile.current.classList.add('active');

        if (messages.current.classList.contains('active')) {
            messages.current.classList.remove('active');
        }
        if (notifications.current.classList.contains('active')) {
            notifications.current.classList.remove('active');
        }
        if (settings.current.classList.contains('active')) {
            settings.current.classList.remove('active');
        }
    }


    return (
        <NavbarStyled>
            <Icon>
                <div onClick={toggleSidebar}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </Icon>
            <Search>
                <input id="searchInput" type="search" placeholder="Search" />
                <div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} onClick={showSearch} />
                </div>
            </Search>
            <NavLinks>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faMessage} onClick={showMessages} />
                        <span></span>
                        <Messages messages={messages} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBell} onClick={showNotifications} />
                        <span></span>
                        <Notifications notifications={notifications} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faGear} onClick={showSettings} />
                        <Settings settings={settings} />
                    </li>
                    <li>
                        <img src={user} alt="..." width="30" height="30" onClick={showProfile} />
                        <span></span>
                        <Profile profile={profile} />
                    </li>
                </ul>
            </NavLinks>
        </NavbarStyled>
    )
}

export default Navbar