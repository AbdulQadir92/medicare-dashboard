import { useEffect, useState, useMemo } from "react";
import { PaginationStyled, ButtonsContainer, InputContainer, PageNumber, ButtonMain, ButtonSec } from "../../styles/components/dataTable/PaginationComponent.styled";


const PaginationComponent = ({ total, itemsPerPage, onItemsChange, currentPage, onPageChange }) => {
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        if (total > 0 && itemsPerPage > 0) {
            setTotalPages(Math.ceil(total / itemsPerPage));
        }
    }, [total, itemsPerPage, currentPage])

    // const paginationItems = useMemo(() => {
    //     let pages = [];

    //     for (let i = 1; i <= totalPages; i++) {
    //         pages.push(
    //             <Pagination.Item key={i} active={i === currentPage} onClick={() => onPageChange(i)}>
    //                 {i}
    //             </Pagination.Item>
    //         )
    //     }

    //     pages.push(
    //         <PageNumber>
    //             <span>Page <span>{currentPage} of {totalPages}</span></span>
    //         </PageNumber>
    //     )

    //     return pages
    // }, [totalPages, currentPage, itemsPerPage])

    if (totalPages === 0) return null;

    const handleChange = (e) => {
        if (e.target.value <= 0 || !e.target.value) {
            onPageChange(1);
            return
        }
        onPageChange(Number(e.target.value));
    }

    return (
        <PaginationStyled>
            <ButtonsContainer>
                <ButtonSec onClick={() => onPageChange(1)} disabled={currentPage === 1} >1</ButtonSec>
                <ButtonMain onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Prevoius</ButtonMain>
                <PageNumber>
                    <span>Page <span>{currentPage} of {totalPages}</span></span>
                </PageNumber>
                <ButtonMain onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} >Next</ButtonMain>
                <ButtonSec onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages} >{totalPages}</ButtonSec >
            </ButtonsContainer>
            <InputContainer>
                <div>
                    <label>Go to page:</label>
                    <input type="number" defaultValue={currentPage} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <select onChange={(e) => {
                        onPageChange(1);
                        onItemsChange(e.target.value);
                    }}>
                        <option value={8}>Show 8</option>
                        <option value={25}>Show 25</option>
                        <option value={50}>Show 50</option>
                    </select>
                </div>
            </InputContainer>
        </PaginationStyled >
    )
}

export default PaginationComponent