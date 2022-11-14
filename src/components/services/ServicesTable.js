import { ServicesTableStyled, Table, Thead, Tbody } from "../../styles/components/services/ServicesTable.styled";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';


const ServicesTable = ({ services, fillForm, handleDelete }) => {
    return (
        <ServicesTableStyled>
            <h2>Services</h2>
            <Table>
                <Thead>
                    <tr>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Description</th>
                    </tr>
                </Thead>
                <Tbody id="tbody">
                    {services && services.map((service, index) => (
                        <tr key={index}>
                            <td data-title>{service.serviceTitle}</td>
                            <td>
                                <img src={service.serviceImg} alt="..." width="40" height="40" />
                                {/* <span>{service.serviceImg}</span> */}
                            </td>
                            <td>
                                <div>
                                    {service.p1}
                                </div>
                                <div>
                                    {service.p2}
                                </div>
                                <div>
                                    {service.p3}
                                </div>
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
        </ServicesTableStyled>
    )
}

export default ServicesTable