import { useState, useMemo, useEffect } from 'react';
import { DataTableStyled, Table, Thead, Tbody } from "../../styles/components/dataTable/DataTable.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import PaginationComponent from './PaginationComponent';


const DataTable = ({ _data, fillForm, handleDelete, heading }) => {

    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);

    const [data, setData] = useState(null);

    // let ITEMS_PER_PAGE = 8;

    // const [start, setStart] = useState(0);
    // const [end, setEnd] = useState(8);

    // let tData = [];
    // const paginate = () => {
    //     for (let i = start; i < end; i++) {
    //         if (data[i] === undefined) {
    //             break
    //         }
    //         tData.push(data[i]);
    //     }
    // }
    // paginate();

    // const nextPage = () => {
    //     if (end >= data.length - 1) {
    //         return
    //     }

    //     setStart(prevValue => prevValue + 8);
    //     setEnd(prevValue => prevValue + 8);
    //     paginate();
    // }

    // const previousPage = () => {
    //     if (start <= 0) {
    //         return
    //     }
    //     setStart(prevValue => prevValue - 8);
    //     setEnd(prevValue => prevValue - 8);
    //     paginate();
    // }

    const search = (e) => {
        const trs = document.querySelectorAll(`tbody tr`);
        const value = e.target.value.toLocaleLowerCase();

        setTimeout(() => {
            trs.forEach((tr) => {
                const text = tr.textContent.toLocaleLowerCase();
                if (text.indexOf(value) !== -1) {
                    tr.style.display = '';
                } else {
                    tr.style.display = 'none';
                }
            })
        }, 500)
    }

    // const appointmentsData = useMemo(() => {
    //     let computedData = _data;
    //     setTotalItems(computedData.length);

    //     return computedData.slice(
    //         (currentPage - 1) * itemsPerPage,
    //         (currentPage - 1) * itemsPerPage + itemsPerPage
    //     )
    // }, [_data, currentPage, itemsPerPage]);

    useEffect(() => {
        setTotalItems(_data.length);

        const computedData = _data.slice(
            (currentPage - 1) * itemsPerPage,
            (currentPage - 1) * itemsPerPage + itemsPerPage
        )

        setData(computedData);

    }, [_data, currentPage, itemsPerPage]);

    return (
        <DataTableStyled>
            <h2>{heading}</h2>
            <input type="search" placeholder="Search" onChange={search} />
            <Table>
                <Thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Service</th>
                        <th>Doctor</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </Thead>
                <Tbody id="tbody">
                    {data && data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    {item.id}
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td>
                                    {item.service}
                                </td>
                                <td>
                                    {item.doctor}
                                </td>
                                <td>
                                    {item.date}
                                </td>
                                <td>
                                    {item.time}
                                </td>
                                <td>
                                    <div>
                                        <FontAwesomeIcon icon={faPenToSquare} onClick={fillForm} title="Edit" />
                                        <FontAwesomeIcon icon={faTrash} onClick={handleDelete} title="Delete" />
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </Tbody>
            </Table>
            <PaginationComponent
                total={totalItems}
                itemsPerPage={itemsPerPage}
                onItemsChange={items => setItemsPerPage(items)}
                currentPage={currentPage}
                onPageChange={page => setCurrentPage(page)}
            />
        </DataTableStyled>
    )
}

export default DataTable