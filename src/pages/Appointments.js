import { useState } from "react";
import AppointmentsTable from "../components/appointments/AppointmentsTable";
import { AppointmentsFormStyled } from "../styles/components/appointments/AppointmentsForm.styled";
import Button from '../components/Button';
import SecondaryBtn from "../components/SecondaryBtn";


const Appointments = () => {
    const _data = [
        { service: 'Cardiology', doctor: 'Jone Smith' },
        { service: 'Eye Care', doctor: 'Michael Hart' },
        { service: 'Dentistry', doctor: 'Harry Kane' },
        { service: 'Virology', doctor: 'Mason Mount' },
        { service: 'Hepatology', doctor: 'Thomas Aglio' },
        { service: 'Urology', doctor: 'Terry Dubrow' }
    ]
    const [data, setData] = useState(_data);

    const dummyData = [
        { name: 'Aida Bugg', email: 'ab@gmail.com', service: 'Cardiology', doctor: 'John Smith', date: '2022-11-15', time: '18:33' },
        { name: 'Anne Thurium', email: 'at@gmail.com', service: 'Eye Care', doctor: 'Michael Hart', date: '2022-11-20', time: '09:30' },
        { name: 'Perry Scope', email: 'ps@gmail.com', service: 'Dentistry', doctor: 'Harry Kane', date: '2022-11-25', time: '10:20' }
    ]

    const [formData, setFormData] = useState({});
    const [appointments, setAppointments] = useState(dummyData);
    const [saveBtn, setSaveBtn] = useState(true);

    const handleChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        setFormData(prevValue => ({ ...prevValue, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setAppointments(prevValue => [...prevValue, formData]);
        console.log(formData)
        setFormData({});
    }

    const fillForm = (e) => {
        const tdEmail = e.currentTarget.parentElement.parentElement.parentElement.querySelector('td:nth-child(2)').innerText;
        const data = appointments.filter(appointment => appointment.email === tdEmail);
        setFormData(data[0]);
        setSaveBtn(false);

        document.getElementById('appointmentForm').scrollIntoView();
    }

    const resetForm = () => {
        setFormData({});
        setSaveBtn(true);
    }

    const handleDelete = (e) => {
        const tdEmail = e.currentTarget.parentElement.parentElement.parentElement.querySelector('td:nth-child(2)').innerText;
        setAppointments(appointments.filter(appointment => appointment.email !== tdEmail));
    }

    const handleUpdate = () => {
        const emailValue = document.querySelector('#email').value;
        setAppointments(appointments.filter(appointment => appointment.email !== emailValue));
        setAppointments(prevValue => [...prevValue, formData]);
        resetForm();
    }

    return (
        <div>
            <AppointmentsFormStyled>
                <form onSubmit={handleSubmit}>
                    <h2 id="appointmentForm">Appointment Details</h2>
                    <section>
                        <div>
                            <label htmlFor="name">Name <span>(Required)</span></label>
                            <input type="text" id="name" value={formData.name || ''} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="email">Email <span>(Required)</span></label>
                            <input type="text" id="email" value={formData.email || ''} onChange={handleChange} required />
                        </div>
                    </section>
                    <section>
                        <div>
                            <label htmlFor="service">Service <span>(Optional)</span></label>
                            <select id="service" onChange={handleChange} value={formData.service || ''}>
                                <option value="">Select</option>
                                {data && data.map((service, index) => (
                                    <option value={service.service} key={index}>{service.service}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="doctor">Doctor <span>(Required)</span></label>
                            <select id="doctor" onChange={handleChange} value={formData.doctor || ''} required>
                                <option value="">Select</option>
                                {data && data.map((doctor, index) => (
                                    <option value={doctor.doctor} key={index}>{doctor.doctor}</option>
                                ))}
                            </select>
                        </div>
                    </section>
                    <section>
                        <div>
                            <label htmlFor="date">Date <span>(Required)</span></label>
                            <input type="date" id="date" onChange={handleChange} value={formData.date || ''} required />
                        </div>
                        <div>
                            <label htmlFor="time">Time <span>(Required)</span></label>
                            <input type="time" id="time" onChange={handleChange} value={formData.time || ''} required />
                        </div>
                    </section>
                    <div>
                        {saveBtn ? (
                            <Button value="Save" type="submit" />
                        ) : (
                            <>
                                <SecondaryBtn value="Cancel" marginRight="15px" onClick={resetForm} />
                                <Button value="Edit" onClick={handleUpdate} />
                            </>
                        )}
                    </div>
                </form>
            </AppointmentsFormStyled>
            <AppointmentsTable appointments={appointments} fillForm={fillForm} handleDelete={handleDelete} />
        </div>
    )
}

export default Appointments