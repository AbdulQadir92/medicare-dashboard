import { ButtonStyled } from "../styles/components/Button.styled";


const Button = ({ value, type = 'button', marginRight = '', onClick = () => { } }) => {
    return (
        <ButtonStyled type={type} marginRight={marginRight} onClick={onClick}>{value}</ButtonStyled>
    )
}

export default Button