import ServicesTable from "../components/services/ServicesTable";
import { useState } from "react";
import { ServicesFormStyled } from "../styles/components/services/ServicesForm.styled";
import Button from '../components/Button';
import SecondaryBtn from "../components/SecondaryBtn";
import heartBeat from '../images/services/heartBeat.png';
import eyeCare from '../images/services/eyeCare.png';
import dentistry from '../images/services/dentistry.png';


const Services = () => {
    const desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quis animi, consequatur fugit porro recusandae. Facilis quis assumenda obcaecati fugiat eaque, dicta repellat maxime laboriosam eos, distinctio et deserunt enim.'

    const servicesData = [
        { serviceTitle: 'Cardiology', serviceImg: heartBeat, p1: desc, p2: desc, p3: desc },
        { serviceTitle: 'Eye Care', serviceImg: eyeCare, p1: desc, p2: desc, p3: desc },
        { serviceTitle: 'Dentistry', serviceImg: dentistry, p1: desc, p2: desc, p3: desc }
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
        setServices(prevValue => [...prevValue, formData]);
        setFormData({});
    }

    const fillForm = (e) => {
        const tdTitle = e.currentTarget.parentElement.parentElement.parentElement.querySelector('td:first-child').innerText;
        const data = services.filter(service => service.serviceTitle === tdTitle);

        const serviceTitle = data[0].serviceTitle;
        const serviceImg = '';
        const p1 = data[0].p1;
        const p2 = data[0].p2 || '';
        const p3 = data[0].p3 || '';

        const tableData = { serviceTitle, serviceImg, p1, p2, p3 };
        setFormData(tableData);
        setSaveBtn(false);

        document.getElementById('serviceForm').scrollIntoView();
    }

    const resetForm = () => {
        setFormData({});
        setSaveBtn(true);
    }

    const handleDelete = (e) => {
        const tdTitle = e.currentTarget.parentElement.parentElement.parentElement.querySelector('td:first-child').innerText;
        setServices(services.filter(service => service.serviceTitle !== tdTitle));
    }

    const handleUpdate = () => {
        const titleValue = document.querySelector('#serviceTitle').value;
        setServices(services.filter(service => service.serviceTitle !== titleValue));
        setServices(prevValue => [...prevValue, formData]);
        resetForm();
    }

    return (
        <div>
            <ServicesFormStyled>
                <form onSubmit={handleSubmit}>
                    <h2 id="serviceForm">Service Details</h2>
                    <section>
                        <div>
                            <label htmlFor="serviceTitle">Title <span>(Required)</span></label>
                            <input type="text" id="serviceTitle" value={formData.serviceTitle || ''} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="serviceImg">Image <span>(Required)</span></label>
                            <input type="file" id="serviceImg" value={formData.serviceImg || ''} onChange={handleChange} required />
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
                            <Button value="Save" type="submit" />
                        ) : (
                            <>
                                <SecondaryBtn value="Cancel" marginRight="15px" onClick={resetForm} />
                                <Button value="Edit" onClick={handleUpdate} />
                            </>
                        )}
                    </div>
                </form>
            </ServicesFormStyled>
            <ServicesTable services={services} fillForm={fillForm} handleDelete={handleDelete} />
        </div>
    )
}

export default Services