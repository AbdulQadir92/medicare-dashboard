import { SecondaryBtnStyled } from "../styles/components/SecondaryBtn.styled";


const SecondaryBtn = ({ value, marginRight = '', onClick = () => { } }) => {
    return (
        <SecondaryBtnStyled
            type="button"
            marginRight={marginRight}
            onClick={onClick}
        >{value}</SecondaryBtnStyled>
    )
}

export default SecondaryBtn