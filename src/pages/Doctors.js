import { useState, useEffect, useContext } from "react";
import { DoctorsFormStyled, NoData } from "../styles/components/doctors/DoctorsForm.styled";
import { CancelButton, DeleteButton, Button } from "../styles/components/FormButttons.styled";
import ReactTable from "../components/reactTable/ReactTable";
import DeleteModal from "../components/DeleteModal";
import AuthContext from "../contexts/AuthContext";
import PostFormData from "../requests/PostFormData";
import FetchRequest from "../requests/FetchRequest";
import PostRequest from "../requests/PostRequest";

import doctor1 from '../images/doctors/doctor1-min.jpg';
import doctor2 from '../images/doctors/doctor2-min.jpg';
import doctor3 from '../images/doctors/doctor3-min.jpg';
import doctor4 from '../images/doctors/doctor4-min.jpg';
import doctor5 from '../images/doctors/doctor5-min.jpg';
import doctor6 from '../images/doctors/doctor6-min.jpg';


const Doctors = () => {
    // const desc = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'
    // const data = [
    //     { id: 1, doctorName: 'Jone Smith', doctorImg: doctor1, designation: 'Cardiologist', description: desc },
    //     { id: 2, doctorName: 'Michael Hart', doctorImg: doctor2, designation: 'Eye Specialist', description: desc },
    //     { id: 3, doctorName: 'Mason Mount', doctorImg: doctor3, designation: 'Virologist', description: desc },
    //     { id: 4, doctorName: 'Harry Kane', doctorImg: doctor4, designation: 'Dental Surgeon', description: desc },
    //     { id: 5, doctorName: 'Thomas Aglio', doctorImg: doctor5, designation: 'Hepatologist', description: desc },
    //     { id: 6, doctorName: 'Terry Dubrow', doctorImg: doctor6, designation: 'Urologist', description: desc }
    // ]

    const _columns = [
        { Header: 'Id', accessor: 'id' },
        { Header: 'Name', accessor: 'name' },
        {
            Header: 'Image', Cell: tableProps => (
                <div>
                    {/* <img src={tableProps.row.original.doctorImg} alt="..." width="50" height="50" /> */}
                    <img src={`http://127.0.0.1:8000${tableProps.row.original.image}`} alt="..." width="40" height="40" />
                </div>
            )
        },
        { Header: 'Designation', accessor: 'designation' },
        { Header: 'Description', accessor: 'description' }
    ]

    const { authTokens, logout } = useContext(AuthContext);
    const [formData, setFormData] = useState({});
    const [doctors, setDoctors] = useState(null);
    const [doctor, setDoctor] = useState(null);
    const [saveBtn, setSaveBtn] = useState(true);

    useEffect(() => {
        FetchRequest('http://127.0.0.1:8000/doctors/', authTokens, setDoctors, null, logout);
    }, [doctor])

    const handleChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        setFormData(prevValue => ({ ...prevValue, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // setDoctors(prevValue => [...prevValue, formData]);

        const doctorImg = document.querySelector('#doctorImg').files[0];
        const data = new FormData();
        data.append('name', formData.doctorName);
        data.append('image', doctorImg);
        data.append('designation', formData.designation);
        data.append('description', formData.description);

        PostFormData('http://127.0.0.1:8000/doctors/add/', authTokens, data, setDoctor);
        setFormData({});
    }

    const fillForm = (tr) => {
        const _tds = tr.querySelectorAll('td');

        const id = _tds[1].innerText;
        const doctorName = _tds[2].innerText;
        const doctorImg = _tds[3].innerText;
        const designation = _tds[4].innerText;
        const description = _tds[5].innerText;
        const rowData = { id, doctorName, doctorImg, designation, description };

        setFormData(rowData);
        setSaveBtn(false);
        document.getElementById('doctorForm').scrollIntoView();
    }

    const resetForm = () => {
        setFormData({});
        setSaveBtn(true);
    }

    const handleUpdate = () => {
        const id = document.querySelector('#id').value;
        // setDoctors(doctors.filter(doctor => doctor.id != id));
        // setDoctors(prevValue => [...prevValue, formData]);
        // resetForm();

        const doctorImg = document.querySelector('#doctorImg').files[0];
        const data = new FormData();
        data.append('name', formData.doctorName);
        data.append('image', doctorImg);
        data.append('designation', formData.designation);
        data.append('description', formData.description);

        PostFormData(`http://127.0.0.1:8000/doctors/update/${id}/`, authTokens, data, setDoctor);
        resetForm();
    }

    const handleDelete = () => {
        const id = document.querySelector('#id').value;
        // setDoctors(doctors.filter(doctor => doctor.id != id));
        // resetForm();
        PostRequest(`http://127.0.0.1:8000/doctors/delete/${id}/`, authTokens, {}, setDoctor);
        resetForm();
    }

    return (
        <div>
            <DoctorsFormStyled>
                <form onSubmit={handleSubmit}>
                    <h2 id="doctorForm">Doctor Details</h2>
                    <input type="number" id="id" value={formData.id || ''} onChange={(e) => handleChange(e, setFormData)} style={{ display: 'none' }} />
                    <section>
                        <div>
                            <label htmlFor="id">Name <span>(Required)</span></label>
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
            </DoctorsFormStyled>
            <DeleteModal handleDelete={handleDelete} />
            {doctors && doctors.length === 0 && <NoData>No doctors to show</NoData>}
            {doctors && doctors.length !== 0 && <ReactTable heading="Doctor" _columns={_columns} _data={doctors} fillForm={fillForm} pg="doctors" />}
        </div>
    )
}

export default Doctors