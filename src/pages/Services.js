import { useState } from "react";
import { ServicesFormStyled, Description } from "../styles/components/services/ServicesForm.styled";
import { CancelButton, DeleteButton, Button } from "../styles/components/FormButttons.styled";
import ReactTable from "../components/reactTable/ReactTable";
import DeleteModal from "../components/DeleteModal";

import heartBeat from '../images/services/heartBeat-min.png';
import eyeCare from '../images/services/eyeCare-min.png';
import dentistry from '../images/services/dentistry-min.png';
import virology from '../images/services/virology-min.png';
import hepatology from '../images/services/hepatology-min.png';
import urology from '../images/services/urology-min.png';


const Services = () => {
    const desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quis animi, consequatur fugit porro recusandae. Facilis quis assumenda obcaecati fugiat eaque, dicta repellat maxime laboriosam eos, distinctio et deserunt enim.';

    const servicesData = [
        { id: 1, title: 'Cardiology', image: heartBeat, description: { p1: desc, p2: desc, p3: desc } },
        { id: 2, title: 'Eye Care', image: eyeCare, description: { p1: desc, p2: desc, p3: desc } },
        { id: 3, title: 'Dentistry', image: dentistry, description: { p1: desc, p2: desc, p3: desc } },
        { id: 4, title: 'Virology', image: virology, description: { p1: desc, p2: desc, p3: desc } },
        { id: 5, title: 'Hepatology', image: hepatology, description: { p1: desc, p2: desc, p3: desc } },
        { id: 6, title: 'Urology', image: urology, description: { p1: desc, p2: desc, p3: desc } }
    ];

    const _columns = [
        { Header: 'Id', accessor: 'id' },
        { Header: 'Title', accessor: 'title' },
        {
            Header: 'Image', Cell: tableProps => (
                <div>
                    <img src={tableProps.row.original.image} alt="..." width="40" height="40" />
                </div>
            )
        },
        {
            Header: 'Description', accessor: 'description', Cell: tableProps => (
                <Description>
                    <p>{tableProps.row.original.description.p1}</p>
                    <p>{tableProps.row.original.description.p2}</p>
                    <p>{tableProps.row.original.description.p3}</p>
                </Description>
            )
        }
    ];

    const [formData, setFormData] = useState({});
    const [services, setServices] = useState(servicesData);
    const [saveBtn, setSaveBtn] = useState(true);

    const handleChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        setFormData(prevValue => ({ ...prevValue, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const rowData = {
            id: formData.id,
            title: formData.title,
            image: formData.image,
            description: {
                p1: formData.p1,
                p2: formData.p2,
                p3: formData.p3
            }
        };
        setServices(prevValue => [...prevValue, rowData]);
        setFormData({});
    }

    const fillForm = (tr) => {
        const _tds = tr.querySelectorAll('td');

        const id = _tds[1].innerText;
        const title = _tds[2].innerText;
        const image = _tds[3].innerText;
        const _description = _tds[4];
        const paragraphs = _description.querySelectorAll('p');

        const p1 = paragraphs[0].innerText;
        const p2 = paragraphs[1].innerText;
        const p3 = paragraphs[2].innerText;

        const rowData = { id, title, image, p1, p2, p3 };
        setFormData(rowData);
        setSaveBtn(false);
        document.getElementById('serviceForm').scrollIntoView();
    }

    const resetForm = () => {
        setFormData({});
        setSaveBtn(true);
    }

    const handleDelete = () => {
        const id = document.querySelector('#id').value;
        setServices(services.filter(service => service.id != id));
        resetForm();
    }

    const handleUpdate = () => {
        const id = document.querySelector('#id').value;
        setServices(services.filter(service => service.id != id));
        const rowData = {
            id: formData.id,
            title: formData.title,
            image: formData.image,
            description: {
                p1: formData.p1,
                p2: formData.p2,
                p3: formData.p3
            }
        };
        setServices(prevValue => [...prevValue, rowData]);
        resetForm();
    }

    return (
        <div>
            <ServicesFormStyled>
                <form onSubmit={handleSubmit}>
                    <h2 id="serviceForm">Service Details</h2>
                    <input type="number" id="id" value={formData.id || ''} onChange={(e) => handleChange(e, setFormData)} style={{ display: 'none' }} />
                    <section>
                        <div>
                            <label htmlFor="title">Title <span>(Required)</span></label>
                            <input type="text" id="title" value={formData.title || ''} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="image">Image <span>(Required)</span></label>
                            <input type="file" id="image" value={formData.image || ''} onChange={handleChange} required />
                        </div>
                    </section>
                    <section>
                        <div>
                            <label htmlFor="p1">Paragraph One <span>(Required)</span></label>
                            <textarea id="p1" rows="3" value={formData.p1 || ''} onChange={handleChange} required></textarea>
                        </div>
                        <div>
                            <label htmlFor="p2">Paragraph Two <span>(Optional)</span></label>
                            <textarea id="p2" rows="3" value={formData.p2 || ''} onChange={handleChange}></textarea>
                        </div>
                        <div>
                            <label htmlFor="p3">Paragraph Three <span>(Optional)</span></label>
                            <textarea id="p3" rows="3" value={formData.p3 || ''} onChange={handleChange}></textarea>
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
            </ServicesFormStyled>
            <DeleteModal handleDelete={handleDelete} />
            <ReactTable heading="Services" _columns={_columns} _data={services} fillForm={fillForm} />
        </div>
    )
}

export default Services