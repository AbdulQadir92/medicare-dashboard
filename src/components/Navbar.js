import { useEffect } from "react";
import { NavbarStyled, Icon, Search, NavLinks } from "../styles/components/Navbar.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faBell, faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import user from '../images/navbar/user.jpg';

const Navbar = () => {

    useEffect(() => {
        document.onclick = (e) => {
            e.stopPropagation();
            const inp = document.querySelector('#searchInput');
            if (!e.target.closest('#searchInput') && inp.classList.contains('active')) {
                inp.classList.remove('active');
                inp.value = '';
            }

            if (window.innerWidth < 576) {
                const sidebar = document.querySelector('#sidebar');
                if (!e.target.closest('#sidebar') && sidebar.classList.contains('active')) {
                    sidebar.classList.remove('active');
                }
            }
        }
    }, [])

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
                        <FontAwesomeIcon icon={faMessage} />
                        <span></span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBell} />
                        <span></span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faGear} />
                    </li>
                    <li>
                        <img src={user} alt="..." width="30" height="30" />
                        <span></span>
                    </li>
                </ul>
            </NavLinks>
        </NavbarStyled>
    )
}

export default Navbar