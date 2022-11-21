import { useState } from "react";
import { AppointmentsFormStyled, } from "../styles/components/appointments/AppointmentsForm.styled";
import { CancelButton, DeleteButton, Button } from "../styles/components/FormButttons.styled";
import { format } from 'date-fns';
import ReactTable from "../components/reactTable/ReactTable";
import DeleteModal from "../components/DeleteModal";


const Appointments = () => {
    const _data = [
        { service: 'Cardiology', doctor: 'John Smith' },
        { service: 'Eye Care', doctor: 'Michael Hart' },
        { service: 'Dentistry', doctor: 'Harry Kane' },
        { service: 'Virology', doctor: 'Mason Mount' },
        { service: 'Hepatology', doctor: 'Thomas Aglio' },
        { service: 'Urology', doctor: 'Terry Dubrow' }
    ]

    const _columns = [
        { Header: 'Id', accessor: 'id' },
        { Header: 'Name', accessor: 'name' },
        { Header: 'Email', accessor: 'email' },
        { Header: 'Service', accessor: 'service' },
        { Header: 'Doctor', accessor: 'doctor' },
        { Header: 'Date', accessor: 'date', Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy') } },
        { Header: 'Time', accessor: 'time', disableFilters: true }
    ]

    const recentAppointments = [
        { id: 1, name: 'Aida Bugg', email: 'ab@gmail.com', service: 'Cardiology', doctor: 'John Smith', date: '2022-11-15', time: '18:33' },
        { id: 2, name: 'Anne Thurium', email: 'at@gmail.com', service: 'Eye Care', doctor: 'Michael Hart', date: '2022-11-15', time: '18:00' },
        { id: 3, name: 'Perry Scope', email: 'ps@gmail.com', service: 'Dentistry', doctor: 'Harry Kane', date: '2022-11-15', time: '17:45' },
        { id: 4, name: 'Aida Bugg', email: 'ab@gmail.com', service: 'Cardiology', doctor: 'John Smith', date: '2022-11-15', time: '18:33' },
        { id: 5, name: 'Anne Thurium', email: 'at@gmail.com', service: 'Eye Care', doctor: 'Michael Hart', date: '2022-11-15', time: '18:00' },
        { id: 6, name: 'Perry Scope', email: 'ps@gmail.com', service: 'Dentistry', doctor: 'Harry Kane', date: '2022-11-15', time: '17:45' },
        { id: 7, name: 'Aida Bugg', email: 'ab@gmail.com', service: 'Cardiology', doctor: 'John Smith', date: '2022-11-15', time: '18:33' },
        { id: 8, name: 'Anne Thurium', email: 'at@gmail.com', service: 'Eye Care', doctor: 'Michael Hart', date: '2022-11-15', time: '18:00' },
        { id: 9, name: 'Perry Scope', email: 'ps@gmail.com', service: 'Dentistry', doctor: 'Harry Kane', date: '2022-11-15', time: '17:45' },
        { id: 10, name: 'Aida Bugg', email: 'ab@gmail.com', service: 'Cardiology', doctor: 'John Smith', date: '2022-11-15', time: '18:33' },
        { id: 11, name: 'Anne Thurium', email: 'at@gmail.com', service: 'Eye Care', doctor: 'Michael Hart', date: '2022-11-15', time: '18:00' },
        { id: 12, name: 'Perry Scope', email: 'ps@gmail.com', service: 'Dentistry', doctor: 'Harry Kane', date: '2022-11-15', time: '17:45' },
        { id: 13, name: 'Aida Bugg', email: 'ab@gmail.com', service: 'Cardiology', doctor: 'John Smith', date: '2022-11-15', time: '18:33' },
        { id: 14, name: 'Anne Thurium', email: 'at@gmail.com', service: 'Eye Care', doctor: 'Michael Hart', date: '2022-11-15', time: '18:00' },
        { id: 15, name: 'Perry Scope', email: 'ps@gmail.com', service: 'Dentistry', doctor: 'Harry Kane', date: '2022-11-15', time: '17:45' },
        { id: 16, name: 'Aida Bugg', email: 'ab@gmail.com', service: 'Cardiology', doctor: 'John Smith', date: '2022-11-15', time: '18:33' },
        { id: 17, name: 'Anne Thurium', email: 'at@gmail.com', service: 'Eye Care', doctor: 'Michael Hart', date: '2022-11-15', time: '18:00' },
        { id: 18, name: 'Perry Scope', email: 'ps@gmail.com', service: 'Dentistry', doctor: 'Harry Kane', date: '2022-11-15', time: '17:45' },
        { id: 19, name: 'Aida Bugg', email: 'ab@gmail.com', service: 'Cardiology', doctor: 'John Smith', date: '2022-11-15', time: '18:33' },
        { id: 20, name: 'Anne Thurium', email: 'at@gmail.com', service: 'Eye Care', doctor: 'Michael Hart', date: '2022-11-15', time: '18:00' },
        { id: 21, name: 'Perry Scope', email: 'ps@gmail.com', service: 'Dentistry', doctor: 'Harry Kane', date: '2022-11-15', time: '17:45' },
        { id: 22, name: 'Aida Bugg', email: 'ab@gmail.com', service: 'Cardiology', doctor: 'John Smith', date: '2022-11-15', time: '18:33' },
        { id: 23, name: 'Anne Thurium', email: 'at@gmail.com', service: 'Eye Care', doctor: 'Michael Hart', date: '2022-11-15', time: '18:00' },
        { id: 24, name: 'Perry Scope', email: 'ps@gmail.com', service: 'Dentistry', doctor: 'Harry Kane', date: '2022-11-15', time: '17:45' },
        { id: 25, name: 'Aida Bugg', email: 'ab@gmail.com', service: 'Cardiology', doctor: 'John Smith', date: '2022-11-15', time: '18:33' },
        { id: 26, name: 'Anne Thurium', email: 'at@gmail.com', service: 'Eye Care', doctor: 'Michael Hart', date: '2022-11-15', time: '18:00' },
        { id: 27, name: 'Perry Scope', email: 'ps@gmail.com', service: 'Dentistry', doctor: 'Harry Kane', date: '2022-11-15', time: '17:45' },
        { id: 28, name: 'Aida Bugg', email: 'ab@gmail.com', service: 'Cardiology', doctor: 'John Smith', date: '2022-11-15', time: '18:33' },
        { id: 29, name: 'Anne Thurium', email: 'at@gmail.com', service: 'Eye Care', doctor: 'Michael Hart', date: '2022-11-15', time: '18:00' },
        { id: 30, name: 'Perry Scope', email: 'ps@gmail.com', service: 'Dentistry', doctor: 'Harry Kane', date: '2022-11-15', time: '17:45' },
        { id: 31, name: 'Aida Bugg', email: 'ab@gmail.com', service: 'Cardiology', doctor: 'John Smith', date: '2022-11-15', time: '18:33' },
        { id: 32, name: 'Anne Thurium', email: 'at@gmail.com', service: 'Eye Care', doctor: 'Michael Hart', date: '2022-11-15', time: '18:00' },
        { id: 33, name: 'Perry Scope', email: 'ps@gmail.com', service: 'Dentistry', doctor: 'Harry Kane', date: '2022-11-15', time: '17:45' },
        { id: 34, name: 'Aida Bugg', email: 'ab@gmail.com', service: 'Cardiology', doctor: 'John Smith', date: '2022-11-15', time: '18:33' },
        { id: 35, name: 'Anne Thurium', email: 'at@gmail.com', service: 'Eye Care', doctor: 'Michael Hart', date: '2022-11-15', time: '18:00' },
        { id: 36, name: 'Perry Scope', email: 'ps@gmail.com', service: 'Dentistry', doctor: 'Harry Kane', date: '2022-11-15', time: '17:45' }
    ]

    const [formData, setFormData] = useState({});
    const [appointments, setAppointments] = useState(recentAppointments);
    const [saveBtn, setSaveBtn] = useState(true);


    const handleChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        setFormData(prevValue => ({ ...prevValue, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setAppointments(prevValue => [...prevValue, formData]);
        setFormData({});
    }

    const fillForm = (tr) => {
        const _tds = tr.querySelectorAll('td');

        const id = _tds[1].innerText;
        const name = _tds[2].innerText;
        const email = _tds[3].innerText;
        const service = _tds[4].innerText;
        const doctor = _tds[5].innerText;
        const date = _tds[6].innerText;
        const time = _tds[7].innerText;

        const day = date.slice(0, date.indexOf('/'));
        const month = date.slice(date.indexOf('/') + 1, date.lastIndexOf('/'));
        const year = date.slice(date.lastIndexOf('/') + 1);
        const formattedDate = `${year}-${month}-${day}`;

        const rowData = { id, name, email, service, doctor, date: formattedDate, time };
        setFormData(rowData);
        setSaveBtn(false);
        document.getElementById('appointmentForm').scrollIntoView();
    }

    const resetForm = () => {
        setFormData({});
        setSaveBtn(true);
    }

    const handleDelete = () => {
        const id = Number(document.querySelector('#id').value);
        setAppointments(appointments.filter(appointment => appointment.id != id));
        resetForm();
    }

    const handleUpdate = () => {
        const id = Number(document.querySelector('#id').value);
        setAppointments(appointments.filter(appointment => appointment.id != id));
        setAppointments(prevValue => [...prevValue, formData]);
        resetForm();
    }

    return (
        <div>
            <AppointmentsFormStyled>
                <form onSubmit={(e) => handleSubmit(e, setAppointments, setFormData, formData)}>
                    <h2 id="appointmentForm">Appointment Details</h2>
                    <input type="number" id="id" value={formData.id || ''} onChange={(e) => handleChange(e, setFormData)} style={{ display: 'none' }} />
                    <section>
                        <div>
                            <label htmlFor="name">Name <span>(Required)</span></label>
                            <input type="text" id="name" value={formData.name || ''} onChange={(e) => handleChange(e, setFormData)} required />
                        </div>
                        <div>
                            <label htmlFor="email">Email <span>(Required)</span></label>
                            <input type="text" id="email" value={formData.email || ''} onChange={(e) => handleChange(e, setFormData)} required />
                        </div>
                    </section>
                    <section>
                        <div>
                            <label htmlFor="service">Service <span>(Optional)</span></label>
                            <select id="service" onChange={(e) => handleChange(e, setFormData)} value={formData.service || ''}>
                                <option value="">Select</option>
                                {_data && _data.map((service, index) => (
                                    <option value={service.service} key={index}>{service.service}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="doctor">Doctor <span>(Required)</span></label>
                            <select id="doctor" onChange={(e) => handleChange(e, setFormData)} value={formData.doctor || ''} required>
                                <option value="">Select</option>
                                {_data && _data.map((doctor, index) => (
                                    <option value={doctor.doctor} key={index}>{doctor.doctor}</option>
                                ))}
                            </select>
                        </div>
                    </section>
                    <section>
                        <div>
                            <label htmlFor="date">Date <span>(Required)</span></label>
                            <input type="date" id="date" onChange={(e) => handleChange(e, setFormData)} value={formData.date || ''} required />
                        </div>
                        <div>
                            <label htmlFor="time">Time <span>(Required)</span></label>
                            <input type="time" id="time" onChange={(e) => handleChange(e, setFormData)} value={formData.time || ''} required />
                        </div>
                    </section>
                    <div>
                        {saveBtn ? (
                            <Button type="submit">Save</Button>
                        ) : (
                            <>
                                <CancelButton onClick={resetForm}>Cancel</CancelButton>
                                <DeleteButton onClick={(e) => e.preventDefault()} data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</DeleteButton>
                                <Button onClick={handleUpdate}>Edit</Button>
                            </>
                        )}
                    </div>
                </form>
            </AppointmentsFormStyled>
            <DeleteModal handleDelete={handleDelete} />
            <ReactTable heading={'Appointments'} _columns={_columns} _data={appointments} fillForm={fillForm} />
        </div>
    )
}

export default Appointments