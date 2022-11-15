import { AppointmentsTableStyled, Table, Thead, Tbody } from '../../styles/components/appointments/AppointmentsTable.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';


const AppointmentsTable = ({ appointments, fillForm, handleDelete }) => {

    const search = (e) => {
        const trs = document.querySelectorAll('#doctorsTbody tr');

        const value = e.target.value.toLocaleLowerCase();

        trs.forEach((tr) => {
            const text = tr.textContent.toLocaleLowerCase();
            if (text.indexOf(value) !== -1) {
                tr.style.display = '';
            } else {
                tr.style.display = 'none';
            }
        })
    }

    return (
        <AppointmentsTableStyled>
            <h2>Appointments</h2>
            <input type="search" placeholder="Search" onChange={search} />
            <Table>
                <Thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Service</th>
                        <th>Doctor</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </Thead>
                <Tbody id="doctorsTbody">
                    {appointments && appointments.map((appointment, index) => (
                        <tr key={index}>
                            <td>
                                {appointment.name}
                            </td>
                            <td>
                                {appointment.email}
                            </td>
                            <td>
                                {appointment.service}
                            </td>
                            <td>
                                {appointment.doctor}
                            </td>
                            <td>
                                {appointment.date}
                            </td>
                            <td>
                                {appointment.time}
                            </td>
                            <td>
                                <div>
                                    <FontAwesomeIcon icon={faPenToSquare} onClick={fillForm} title="Edit" />
                                    <FontAwesomeIcon icon={faTrash} onClick={handleDelete} title="Delete" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </Tbody>
            </Table>
        </AppointmentsTableStyled>
    )
}

export default AppointmentsTable