import { useState, useEffect } from "react";
import { AppointmentsFormStyled, NoData } from "../styles/components/appointments/AppointmentsForm.styled";
import { CancelButton, DeleteButton, Button } from "../styles/components/FormButttons.styled";
import { format } from 'date-fns';
import ReactTable from "../components/reactTable/ReactTable";
import DeleteModal from "../components/DeleteModal";
import { v4 as uuidv4 } from 'uuid';


const Appointments = () => {
    const recentAppointments = [
        { id: 1, name: 'Aida Bugg', email: 'ab@gmail.com', service: 'Cardiology', doctor: 'John Smith', date: '2022-11-15', time: '12:00 AM' },
        { id: 2, name: 'Anne Thurium', email: 'at@gmail.com', service: 'Eye Care', doctor: 'Michael Hart', date: '2022-11-15', time: '03:00 AM' },
        { id: 3, name: 'Perry Scope', email: 'ps@gmail.com', service: 'Dentistry', doctor: 'Harry Kane', date: '2022-11-15', time: '12:45 PM' },
        { id: 4, name: 'Aida Bugg', email: 'ab@gmail.com', service: 'Cardiology', doctor: 'John Smith', date: '2022-11-15', time: '06:33 PM' },
        { id: 5, name: 'Anne Thurium', email: 'at@gmail.com', service: 'Eye Care', doctor: 'Michael Hart', date: '2022-11-15', time: '01:10 PM' },
        { id: 6, name: 'Perry Scope', email: 'ps@gmail.com', service: 'Dentistry', doctor: 'Harry Kane', date: '2022-11-15', time: '11:45 PM' },
        { id: 7, name: 'Aida Bugg', email: 'ab@gmail.com', service: 'Cardiology', doctor: 'John Smith', date: '2022-11-15', time: '02:33 PM' },
        { id: 8, name: 'Anne Thurium', email: 'at@gmail.com', service: 'Eye Care', doctor: 'Michael Hart', date: '2022-11-15', time: '02:00 PM' },
        { id: 9, name: 'Perry Scope', email: 'ps@gmail.com', service: 'Dentistry', doctor: 'Harry Kane', date: '2022-11-15', time: '10:45 AM' },
        { id: 10, name: 'Aida Bugg', email: 'ab@gmail.com', service: 'Cardiology', doctor: 'John Smith', date: '2022-11-15', time: '02:33 PM' },
        { id: 11, name: 'Anne Thurium', email: 'at@gmail.com', service: 'Eye Care', doctor: 'Michael Hart', date: '2022-11-15', time: '02:00 PM' },
        { id: 12, name: 'Perry Scope', email: 'ps@gmail.com', service: 'Dentistry', doctor: 'Harry Kane', date: '2022-11-15', time: '10:45 AM' },
        { id: 13, name: 'Aida Bugg', email: 'ab@gmail.com', service: 'Cardiology', doctor: 'John Smith', date: '2022-11-15', time: '02:33 PM' },
        { id: 14, name: 'Anne Thurium', email: 'at@gmail.com', service: 'Eye Care', doctor: 'Michael Hart', date: '2022-11-15', time: '02:00 PM' },
        { id: 15, name: 'Perry Scope', email: 'ps@gmail.com', service: 'Dentistry', doctor: 'Harry Kane', date: '2022-11-15', time: '10:45 AM' },
        { id: 16, name: 'Aida Bugg', email: 'ab@gmail.com', service: 'Cardiology', doctor: 'John Smith', date: '2022-11-15', time: '02:33 PM' },
        { id: 17, name: 'Anne Thurium', email: 'at@gmail.com', service: 'Eye Care', doctor: 'Michael Hart', date: '2022-11-15', time: '02:00 PM' },
        { id: 18, name: 'Perry Scope', email: 'ps@gmail.com', service: 'Dentistry', doctor: 'Harry Kane', date: '2022-11-15', time: '10:45 AM' },
        { id: 19, name: 'Aida Bugg', email: 'ab@gmail.com', service: 'Cardiology', doctor: 'John Smith', date: '2022-11-15', time: '02:33 PM' },
        { id: 20, name: 'Anne Thurium', email: 'at@gmail.com', service: 'Eye Care', doctor: 'Michael Hart', date: '2022-11-15', time: '02:00 PM' },
        { id: 21, name: 'Perry Scope', email: 'ps@gmail.com', service: 'Dentistry', doctor: 'Harry Kane', date: '2022-11-15', time: '10:45 AM' },
        { id: 22, name: 'Aida Bugg', email: 'ab@gmail.com', service: 'Cardiology', doctor: 'John Smith', date: '2022-11-15', time: '02:33 PM' },
        { id: 23, name: 'Anne Thurium', email: 'at@gmail.com', service: 'Eye Care', doctor: 'Michael Hart', date: '2022-11-15', time: '02:00 PM' },
        { id: 24, name: 'Perry Scope', email: 'ps@gmail.com', service: 'Dentistry', doctor: 'Harry Kane', date: '2022-11-15', time: '10:45 AM' },
        { id: 25, name: 'Aida Bugg', email: 'ab@gmail.com', service: 'Cardiology', doctor: 'John Smith', date: '2022-11-15', time: '02:33 PM' },
        { id: 26, name: 'Anne Thurium', email: 'at@gmail.com', service: 'Eye Care', doctor: 'Michael Hart', date: '2022-11-15', time: '02:00 PM' },
        { id: 27, name: 'Perry Scope', email: 'ps@gmail.com', service: 'Dentistry', doctor: 'Harry Kane', date: '2022-11-15', time: '10:45 AM' },
        { id: 28, name: 'Aida Bugg', email: 'ab@gmail.com', service: 'Cardiology', doctor: 'John Smith', date: '2022-11-15', time: '02:33 PM' },
        { id: 29, name: 'Anne Thurium', email: 'at@gmail.com', service: 'Eye Care', doctor: 'Michael Hart', date: '2022-11-15', time: '02:00 PM' },
        { id: 30, name: 'Perry Scope', email: 'ps@gmail.com', service: 'Dentistry', doctor: 'Harry Kane', date: '2022-11-15', time: '10:45 AM' },
        { id: 31, name: 'Aida Bugg', email: 'ab@gmail.com', service: 'Cardiology', doctor: 'John Smith', date: '2022-11-15', time: '02:33 PM' },
        { id: 32, name: 'Anne Thurium', email: 'at@gmail.com', service: 'Eye Care', doctor: 'Michael Hart', date: '2022-11-15', time: '02:00 PM' },
        { id: 33, name: 'Perry Scope', email: 'ps@gmail.com', service: 'Dentistry', doctor: 'Harry Kane', date: '2022-11-15', time: '10:45 AM' },
        { id: 34, name: 'Aida Bugg', email: 'ab@gmail.com', service: 'Cardiology', doctor: 'John Smith', date: '2022-11-15', time: '02:33 PM' },
        { id: 35, name: 'Anne Thurium', email: 'at@gmail.com', service: 'Eye Care', doctor: 'Michael Hart', date: '2022-11-15', time: '02:00 PM' },
        { id: 36, name: 'Perry Scope', email: 'ps@gmail.com', service: 'Dentistry', doctor: 'Harry Kane', date: '2022-11-15', time: '10:45 AM' }
    ]

    const servicesData = [
        { title: 'Cardiology' },
        { title: 'Eye Care' },
        { title: 'Dentistry' },
        { title: 'Virology' },
        { title: 'Hepatology' },
        { title: 'Urology' }
    ]

    const doctorsData = [
        { name: 'John Smith', designation: 'Cardiologist' },
        { name: 'Michael Hart', designation: 'Eye Specialist' },
        { name: 'Harry Kane', designation: 'Dental Surgeon' },
        { name: 'Mason Mount', designation: 'Virologist' },
        { name: 'Thomas Aglio', designation: 'Hepatologist' },
        { name: 'Terry Dubrow', designation: 'Urologist' }
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

    const [formData, setFormData] = useState({});
    const [appointments, setAppointments] = useState(null);
    const [appointment, setAppointment] = useState(null);
    const [saveBtn, setSaveBtn] = useState(true);
    const [services, setServices] = useState(null);
    const [doctors, setDoctors] = useState(null);

    useEffect(() => {
        setAppointments(recentAppointments);
        setServices(servicesData);
        setDoctors(doctorsData);
    }, [appointment])

    const handleChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        setFormData(prevValue => ({ ...prevValue, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const rowData = {
            id: uuidv4(),
            name: formData.name,
            email: formData.email,
            service: formData.service,
            doctor: formData.doctor,
            date: formData.date,
            time: formatTime()
        };

        setAppointments(prevValue => [...prevValue, rowData]);
        setFormData({});
    }

    const formatTime = () => {
        let hour = formData.time.slice(0, formData.time.indexOf(':'));
        let minutes = formData.time.slice(formData.time.indexOf(':'))

        if (hour === '00') {
            hour = '12';
            minutes += ' AM';
        } else if (hour > '0' && hour < '12') {
            minutes += ' AM';
        } else if (hour === '12') {
            minutes += ' PM';
        } else {
            hour = Number(hour) - 12;
            minutes += ' PM';
        }

        return hour + minutes
    }

    const fillForm = (tr) => {
        const _tds = tr.querySelectorAll('td');

        const id = _tds[1].innerText;
        const name = _tds[2].innerText;
        const email = _tds[3].innerText;
        const service = _tds[4].innerText;
        const doctor = _tds[5].innerText;
        const date = _tds[6].innerText;
        let time = _tds[7].innerText;

        time = revertFormattedTime(time);

        const day = date.slice(0, date.indexOf('/'));
        const month = date.slice(date.indexOf('/') + 1, date.lastIndexOf('/'));
        const year = date.slice(date.lastIndexOf('/') + 1);
        const formattedDate = `${year}-${month}-${day}`;

        const rowData = { id, name, email, service, doctor, date: formattedDate, time };
        setFormData(rowData);
        setSaveBtn(false);
        document.getElementById('appointmentForm').scrollIntoView();
    }

    const revertFormattedTime = (time) => {
        let hour = time.slice(0, time.indexOf(':'));
        let minutes = time.substr(time.indexOf(':'), 3);

        if (time.includes('AM') && hour === '12') {
            hour = '00';
        } else if (time.includes('PM')) {
            hour = Number(hour);
            if (hour < 12) {
                hour += 12;
            }
            hour = String(hour);
        }

        return hour + minutes
    }

    const resetForm = () => {
        setFormData({});
        setSaveBtn(true);
    }

    const handleUpdate = () => {
        const id = document.querySelector('#id').value;
        setAppointments(appointments.filter(appointment => appointment.id != id));
        const rowData = {
            id: id,
            name: formData.name,
            email: formData.email,
            service: formData.service,
            doctor: formData.doctor,
            date: formData.date,
            time: formatTime()
        };
        setAppointments(prevValue => [...prevValue, rowData]);
        resetForm();
    }

    const handleDelete = () => {
        const id = document.querySelector('#id').value;
        setAppointments(appointments.filter(appointment => appointment.id != id));
        resetForm();
    }

    return (
        <div>
            <AppointmentsFormStyled>
                <form onSubmit={(e) => handleSubmit(e, setAppointments, setFormData, formData)}>
                    <h2 id="appointmentForm">Appointment Details</h2>
                    <input type="text" id="id" value={formData.id || ''} onChange={(e) => handleChange(e, setFormData)} style={{ display: 'none' }} />
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
                                {services && services.map((service, index) => (
                                    <option value={service.title} key={index}>{service.title}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="doctor">Doctor <span>(Required)</span></label>
                            <select id="doctor" onChange={(e) => handleChange(e, setFormData)} value={formData.doctor || ''} required>
                                <option value="">Select</option>
                                {doctors && doctors.map((doctor, index) => (
                                    <option value={doctor.name} key={index}>{doctor.name} ({doctor.designation})</option>
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
            {appointments && appointments.length === 0 && <NoData>No appointments to show</NoData>}
            {appointments && appointments.length !== 0 && <ReactTable heading={'Appointments'} _columns={_columns} _data={appointments} fillForm={fillForm} />}
        </div>
    )
}

export default Appointments