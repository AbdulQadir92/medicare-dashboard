import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarStyled, SidebarUL, BrandLi, Li } from "../styles/components/Sidebar.styled";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faHome, faHandHoldingMedical, faUserDoctor, faCalendarCheck, faEnvelope, faClose } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            firstLoad();
            setLoading(false);
        }

        activePage();
    }, [])

    const firstLoad = () => {
        const lis = document.querySelectorAll('#sidebar li:not(:first-child)');
        lis.forEach((li) => {
            const currentPath = location.pathname;
            const linkPath = li.firstElementChild.href.slice(li.firstElementChild.href.lastIndexOf('/'));

            if (currentPath === linkPath) {
                li.classList.add('active');
            } else {
                li.classList.remove('active');
            }
        })
    }

    const toggleSidebar = (e) => {
        e.stopPropagation();
        const sidebar = document.querySelector('#sidebar');
        const main = document.querySelector('#main');

        sidebar.classList.toggle('active');
        main.classList.toggle('active');
    }

    const activePage = () => {
        const lis = document.querySelectorAll('#sidebar li:not(:first-child)');
        lis.forEach((li) => {
            li.addEventListener('click', (e) => {
                lis.forEach((li) => {
                    li.classList.remove('active');
                })
                e.currentTarget.classList.add('active');
            })
        })
    }

    return (
        <SidebarStyled id="sidebar">
            <SidebarUL>
                <BrandLi>
                    <Link to="#">
                        <span>
                            <FontAwesomeIcon icon={faHeartPulse} />
                        </span>
                        <span>MediCare</span>
                    </Link>
                    <span onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={faClose} />
                    </span>
                </BrandLi>
                <Li className="active">
                    <Link to="/">
                        <span>
                            <FontAwesomeIcon icon={faHome} />
                        </span>
                        <span>Dashboard</span>
                    </Link>
                </Li>
                <Li>
                    <Link to="/services">
                        <span>
                            <FontAwesomeIcon icon={faHandHoldingMedical} />
                        </span>
                        <span>Services</span>
                    </Link>
                </Li>
                <Li>
                    <Link to="/doctors">
                        <span>
                            <FontAwesomeIcon icon={faUserDoctor} />
                        </span>
                        <span>Doctors</span>
                    </Link>
                </Li>
                <Li>
                    <Link to="/appointments">
                        <span>
                            <FontAwesomeIcon icon={faCalendarCheck} />
                        </span>
                        <span>Appoinments</span>
                    </Link>
                </Li>
                <Li>
                    <Link to="/emails">
                        <span>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <span>Emails</span>
                    </Link>
                </Li>
            </SidebarUL>
        </SidebarStyled>
    )
}

export default Sidebar