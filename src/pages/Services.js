import { useState, useEffect, useContext } from "react";
import { ServicesFormStyled, Description, NoData } from "../styles/components/services/ServicesForm.styled";
import { CancelButton, DeleteButton, Button } from "../styles/components/FormButttons.styled";
import ReactTable from "../components/reactTable/ReactTable";
import DeleteModal from "../components/DeleteModal";
import AuthContext from "../contexts/AuthContext";
import FetchRequest from "../requests/FetchRequest";
import PostRequest from "../requests/PostRequest";
import PostFormData from "../requests/PostFormData";

import heartBeat from '../images/services/heartBeat-min.png';
import eyeCare from '../images/services/eyeCare-min.png';
import dentistry from '../images/services/dentistry-min.png';
import virology from '../images/services/virology-min.png';
import hepatology from '../images/services/hepatology-min.png';
import urology from '../images/services/urology-min.png';


const Services = () => {
    // const desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quis animi, consequatur fugit porro recusandae. Facilis quis assumenda obcaecati fugiat eaque, dicta repellat maxime laboriosam eos, distinctio et deserunt enim.';
    // const servicesData = [
    //     { id: 1, title: 'Cardiology', image: heartBeat, description: { p1: desc, p2: desc, p3: desc } },
    //     { id: 2, title: 'Eye Care', image: eyeCare, description: { p1: desc, p2: desc, p3: desc } },
    //     { id: 3, title: 'Dentistry', image: dentistry, description: { p1: desc, p2: desc, p3: desc } },
    //     { id: 4, title: 'Virology', image: virology, description: { p1: desc, p2: desc, p3: desc } },
    //     { id: 5, title: 'Hepatology', image: hepatology, description: { p1: desc, p2: desc, p3: desc } },
    //     { id: 6, title: 'Urology', image: urology, description: { p1: desc, p2: desc, p3: desc } }
    // ];

    const { authTokens, logout } = useContext(AuthContext);
    const [services, setServices] = useState(null);
    const [service, setService] = useState(null);
    const [formData, setFormData] = useState({});
    const [saveBtn, setSaveBtn] = useState(true);

    useEffect(() => {
        FetchRequest('http://127.0.0.1:8000/services/', authTokens, formatData, null, logout)
        FetchRequest('http://127.0.0.1:8000/services/' + 2, authTokens)
    }, [service])

    const formatData = (data) => {
        const servicesFormated = data.map(service => {
            const obj = {
                id: service.id,
                title: service.title,
                image: service.image,
                description: {
                    p1: service.p1,
                    p2: service.p2,
                    p3: service.p3
                }
            }
            return obj
        })
        setServices(servicesFormated);
    }

    const _columns = [
        { Header: 'Id', accessor: 'id' },
        { Header: 'Title', accessor: 'title' },
        {
            Header: 'Image', Cell: tableProps => (
                <div>
                    {/* <img src={tableProps.row.original.image} alt="..." width="40" height="40" /> */}
                    <img src={`http://127.0.0.1:8000${tableProps.row.original.image}`} alt="..." width="40" height="40" />
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


    const handleChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        setFormData(prevValue => ({ ...prevValue, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // const rowData = {
        //     id: formData.id,
        //     title: formData.title,
        //     image: formData.image,
        //     description: {
        //         p1: formData.p1,
        //         p2: formData.p2,
        //         p3: formData.p3
        //     }
        // };
        // setServices(prevValue => [...prevValue, rowData]);

        const image = document.querySelector('#image').files[0];
        const data = new FormData();
        data.append('title', formData.title);
        data.append('image', image);
        data.append('p1', formData.p1);
        data.append('p2', formData.p2);
        data.append('p3', formData.p3);

        PostFormData('http://127.0.0.1:8000/services/add/', authTokens, data, setService);
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

    const handleUpdate = () => {
        const id = document.querySelector('#id').value;
        // setServices(services.filter(service => service.id != id));
        // const rowData = {
        //     id: formData.id,
        //     title: formData.title,
        //     image: formData.image,
        //     description: {
        //         p1: formData.p1,
        //         p2: formData.p2,
        //         p3: formData.p3
        //     }
        // };
        // setServices(prevValue => [...prevValue, rowData]);

        const image = document.querySelector('#image').files[0];
        const data = new FormData();
        data.append('title', formData.title);
        data.append('image', image);
        data.append('p1', formData.p1);
        data.append('p2', formData.p2);
        data.append('p3', formData.p3);

        PostFormData(`http://127.0.0.1:8000/services/update/${id}/`, authTokens, data, setService);
        resetForm();
    }

    const handleDelete = () => {
        const id = document.querySelector('#id').value;
        // setServices(services.filter(service => service.id != id));
        PostRequest(`http://127.0.0.1:8000/services/delete/${id}/`, authTokens, {}, setService);
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
                                <Button type="submit" onClick={handleUpdate}>Edit</Button>
                            </>
                        )}
                    </div>
                </form>
            </ServicesFormStyled>
            <DeleteModal handleDelete={handleDelete} />
            {services && services.length === 0 && <NoData>No services to show</NoData>}
            {services && services.length !== 0 && <ReactTable heading="Services" _columns={_columns} _data={services} fillForm={fillForm} />}
        </div>
    )
}

export default Services