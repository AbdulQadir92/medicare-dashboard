import { useState } from "react";
import { DoctorsFormStyled } from "../styles/components/doctors/DoctorsForm.styled";
import DoctorsTable from "../components/doctors/DoctorsTable";
import Button from '../components/Button';
import SecondaryBtn from "../components/SecondaryBtn";

import doctor1 from '../images/doctors/doctor1.jpg';
import doctor2 from '../images/doctors/doctor2.jpg';
import doctor4 from '../images/doctors/doctor4.jpg';


const Doctors = () => {
    const desc = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'

    const data = [
        { doctorName: 'Jone Smith', doctorImg: doctor1, designation: 'Cardiologist', description: desc },
        { doctorName: 'Michael Hart', doctorImg: doctor2, designation: 'Eye Specialist', description: desc },
        { doctorName: 'Harry Kane', doctorImg: doctor4, designation: 'Dental Surgeon', description: desc },
    ]

    const [formData, setFormData] = useState({});
    const [doctors, setDoctors] = useState(data);
    const [saveBtn, setSaveBtn] = useState(true);

    const handleChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        setFormData(prevValue => ({ ...prevValue, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDoctors(prevValue => [...prevValue, formData]);
        setFormData({});
    }

    const fillForm = (e) => {
        const tdName = e.currentTarget.parentElement.parentElement.parentElement.querySelector('td:nth-child(2)').innerText;
        const data = doctors.filter(doctor => doctor.doctorName === tdName);

        const doctorName = data[0].doctorName;
        const doctorImg = '';
        const designation = data[0].designation;
        const description = data[0].description;

        const tableData = { doctorName, doctorImg, designation, description };
        setFormData(tableData);
        setSaveBtn(false);

        document.getElementById('doctorForm').scrollIntoView();
    }

    const resetForm = () => {
        setFormData({});
        setSaveBtn(true);
    }

    const handleDelete = (e) => {
        const tdName = e.currentTarget.parentElement.parentElement.parentElement.querySelector('td:nth-child(2)').innerText;
        setDoctors(doctors.filter(doctor => doctor.doctorName !== tdName));
    }

    const handleUpdate = () => {
        const nameValue = document.querySelector('#doctorName').value;
        setDoctors(doctors.filter(doctor => doctor.doctorName !== nameValue));
        setDoctors(prevValue => [...prevValue, formData]);
        resetForm();
    }

    return (
        <div>
            <DoctorsFormStyled>
                <form onSubmit={handleSubmit}>
                    <h2 id="doctorForm">Doctor Details</h2>
                    <section>
                        <div>
                            <label htmlFor="doctorName">Name <span>(Required)</span></label>
                            <input type="text" id="doctorName" value={formData.doctorName || ''} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="doctorImg">Image <span>(Required)</span></label>
                            <input type="file" id="doctorImg" value={formData.doctorImg || ''} onChange={handleChange} required />
                        </div>
                    </section>
                    <section>
                        <div>
                            <label htmlFor="designation">Designation <span>(Required)</span></label>
                            <input type="text" id="designation" value={formData.designation || ''} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="description">Description <span>(Required)</span></label>
                            <textarea id="description" rows="3" value={formData.description || ''} onChange={handleChange} required></textarea>
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
            </DoctorsFormStyled>
            <DoctorsTable doctors={doctors} fillForm={fillForm} handleDelete={handleDelete} />
        </div>
    )
}

export default Doctors