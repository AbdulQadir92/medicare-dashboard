import { HomeStyled } from '../styles/pages/Home.styled';
import Card from '../components/home/Card';
import { faHandHoldingMedical, faUserDoctor, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    return (
        <HomeStyled>
            <div>
                <Card name="Services" icon={faHandHoldingMedical} number="8" color="#DE3163" />
                <Card name="Doctors" icon={faUserDoctor} number="25" color="#40E0D0" />
                <Card name="Appointments" icon={faCalendarCheck} number="1026" color="#FFBF00" />
            </div>
        </HomeStyled>
    )
}

export default Home