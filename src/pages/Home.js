import { useState } from 'react';
import { HomeStyled, Charts, BarChartStyled, DoughnutChartStyled, DoughnutContainer, Labels, LabelsFlex, LabelColor } from '../styles/pages/Home.styled';
import Card from '../components/home/Card';
import { faHandHoldingMedical, faUserDoctor, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import ReactTable from '../components/reactTable/ReactTable';
import { format } from 'date-fns';
import BarChart from '../components/charts/BarChart';
import DoughnutChart from '../components/charts/DoughtnulChart';
import { BarData, DoughnutData } from '../components/charts/Data';
import { defaults } from 'chart.js';
// import recentAppointments from '../recentAppointments.json';
import AppointmentsData from '../appointmenstData.json';


const Home = () => {
    defaults.font.family = 'Source Sans Pro, sans-serif';
    const BackgroundColors = ['#DE3163', '#40E0D0', '#FFBF00'];

    const [barData, setBarData] = useState({
        labels: BarData.map(data => data.year),
        datasets: [
            {
                label: 'Services',
                data: BarData.map(d => d.number.services),
                backgroundColor: '#DE3163'
            },
            {
                label: 'Doctors',
                data: BarData.map(d => d.number.doctors),
                backgroundColor: '#40E0D0'
            },
            {
                label: 'Appointments',
                data: BarData.map(d => d.number.appointments),
                backgroundColor: '#FFBF00'
            }
        ]
    })

    const [doughnutData, setDoughnutData] = useState({
        // labels: Data2.map(d => d.name),
        datasets: [{
            data: DoughnutData.map(d => d.number),
            backgroundColor: BackgroundColors,
            cutout: '80%',
            labels: DoughnutData.map(d => d.name)
        }]
    })

    const _columns = [
        { Header: 'Id', accessor: 'id' },
        { Header: 'Name', accessor: 'name' },
        { Header: 'Email', accessor: 'email' },
        { Header: 'Service', accessor: 'service' },
        { Header: 'Doctor', accessor: 'doctor' },
        { Header: 'Date', accessor: 'date', Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy') } },
        { Header: 'Time', accessor: 'time', disableFilters: true }
    ]

    return (
        <HomeStyled>
            <div>
                <Card name="Services" icon={faHandHoldingMedical} number="8" color="#DE3163" />
                <Card name="Doctors" icon={faUserDoctor} number="25" color="#40E0D0" />
                <Card name="Appointments" icon={faCalendarCheck} number="1026" color="#FFBF00" />
            </div>
            <Charts>
                <BarChartStyled>
                    <div>
                        <BarChart chartData={barData} />
                    </div>
                </BarChartStyled>
                <DoughnutChartStyled>
                    <div>
                        <DoughnutContainer>
                            <DoughnutChart chartData={doughnutData} />
                        </DoughnutContainer>
                        <Labels>
                            <LabelsFlex>
                                {doughnutData && DoughnutData.map((d, index) => (
                                    <div key={index}>
                                        <LabelColor bg={BackgroundColors[index]}></LabelColor>
                                        <span>{d.name}</span>
                                    </div>
                                ))}
                            </LabelsFlex>
                        </Labels>
                    </div>
                </DoughnutChartStyled>
            </Charts>
            <ReactTable heading="Recent Appointments" _columns={_columns} _data={AppointmentsData} _checkbox={false} />
        </HomeStyled>
    )
}

export default Home