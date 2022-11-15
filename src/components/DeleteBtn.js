import { DeleteBtnStyled } from "../styles/components/DeleteBtn.styled";

const DeleteBtn = ({ value, marginRight = '', onClick = () => { } }) => {
    return (
        <DeleteBtnStyled type="button" marginRight={marginRight} onClick={onClick}>{value}</DeleteBtnStyled>
    )
}

export default DeleteBtn