import { SettingsStyled, RadioContainer, CheckBox } from "../../styles/components/navbar/Settings.styled";


const Settings = ({ settings }) => {
    const toggleDark = (e) => {
        console.log(e.target.checked);
    }

    const toggleLight = (e) => {
        console.log(e.target.checked);
    }

    return (
        <SettingsStyled id="settings" ref={settings}>
            <h3>Themes</h3>
            <div>
                <div>
                    <RadioContainer>
                        <label htmlFor="dark">Dark</label>
                        <CheckBox>
                            <input type="radio" name="theme" id="dark" value="dark" onChange={toggleDark} />
                            <span></span>
                        </CheckBox>
                    </RadioContainer>
                    <RadioContainer>
                        <label htmlFor="light">Light</label>
                        <CheckBox>
                            <input type="radio" name="theme" id="light" value="light" onChange={toggleLight} defaultChecked />
                            <span></span>
                        </CheckBox>
                    </RadioContainer>
                </div>
            </div>
        </SettingsStyled>
    )
}

export default Settings