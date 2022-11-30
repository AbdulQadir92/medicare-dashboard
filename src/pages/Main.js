import { Routes, Route } from 'react-router-dom';
import { MainStyled, PagesContainer } from "../styles/Main.styled";

import Home from './Home';
import Services from './Services';
import Doctors from './Doctors';
import Appoinments from './Appointments';
import Emails from './Emails';

import Navbar from '../components/navbar/Navbar';
import SidebarTooltip from '../components/sidebar/SidebarTooltip';
import Footer from '../components/Footer';


const Main = ({ setTheme }) => {
    return (
        <MainStyled id="main">
            <Navbar setTheme={setTheme} />

            {/* Sidebar Tooltips */}
            <SidebarTooltip name="Dashboard" top="75px" id="dashboardTooltip" />
            <SidebarTooltip name="Services" top="120px" id="servicesTooltip" />
            <SidebarTooltip name="Doctors" top="165px" id="doctorsTooltip" />
            <SidebarTooltip name="Appointments" top="210px" id="appointmentsTooltip" />
            <SidebarTooltip name="Emails" top="255px" id="emailsTooltip" />

            <PagesContainer>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/doctors' element={<Doctors />} />
                    <Route path='/appointments' element={<Appoinments />} />
                    <Route path='/emails' element={<Emails />} />
                </Routes>
            </PagesContainer>

            <Footer />
        </MainStyled>
    )
}

export default Main