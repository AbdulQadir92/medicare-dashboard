import { Routes, Route } from 'react-router-dom';
import { MainStyled, PagesContainer } from "../styles/Main.styled";

import Home from './Home';
import Services from './Services';
import Doctors from './Doctors';
import Appoinments from './Appointments';
import Emails from './Emails';

import Navbar from '../components/Navbar';


const Main = () => {
    return (
        <MainStyled id="main">
            <Navbar />
            <PagesContainer>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/doctors' element={<Doctors />} />
                    <Route path='/appointments' element={<Appoinments />} />
                    <Route path='/emails' element={<Emails />} />
                </Routes>
            </PagesContainer>
        </MainStyled>
    )
}

export default Main