import { useEffect } from "react";
import { SettingsStyled, RadioContainer, CheckBox } from "../../styles/components/navbar/Settings.styled";


const Settings = ({ settings, setTheme }) => {
    useEffect(() => {
        const light = document.querySelector('#light');
        const dark = document.querySelector('#dark');
        const theme = localStorage.getItem('theme');
        if (!theme || theme === 'light') {
            light.checked = true;
        }
        if (theme === 'dark') {
            dark.checked = true;
        }
    }, [])

    const toggleDark = () => {
        setTheme('dark');
        localStorage.setItem('theme', 'dark');
    }

    const toggleLight = () => {
        setTheme('light');
        localStorage.setItem('theme', 'light');
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
                            <input type="radio" name="theme" id="light" value="light" onChange={toggleLight} />
                            <span></span>
                        </CheckBox>
                    </RadioContainer>
                </div>
            </div>
        </SettingsStyled>
    )
}

export default Settings