import { DoctorsTableStyled, Table, Thead, Tbody } from "../../styles/components/doctors/DoctorsTable.styled";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';


const DoctorsTable = ({ doctors, fillForm, handleDelete }) => {
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
        <DoctorsTableStyled>
            <h2>Doctors</h2>
            <input type="search" placeholder="Search" onChange={search} />
            <Table>
                <Thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Description</th>
                    </tr>
                </Thead>
                <Tbody id="doctorsTbody">
                    {doctors && doctors.map((doctor, index) => (
                        <tr key={index}>
                            <td>
                                <img src={doctor.doctorImg} alt="..." width="40" height="40" />
                            </td>
                            <td>
                                {doctor.doctorName}
                            </td>
                            <td>
                                {doctor.designation}
                            </td>
                            <td>
                                {doctor.description}
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
        </DoctorsTableStyled>
    )
}

export default DoctorsTable