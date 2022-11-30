import { useEffect } from "react";
import { SettingsStyled, RadioContainer, CheckBox, Colors, ColorContainer } from "../../styles/components/navbar/Settings.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const Settings = ({ settings, setTheme, setMainColor }) => {
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

        if (localStorage.getItem('mainColor')) {
            makeActive();
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

    const changColor = (e) => {
        const color = e.currentTarget.parentElement.dataset.color;
        setMainColor(color);
        localStorage.setItem('mainColor', color);
        makeActive();
    }

    const makeActive = () => {
        const colorDivs = document.querySelectorAll('div[data-color]');
        const newColor = localStorage.getItem('mainColor');
        colorDivs.forEach(colorDiv => {
            if (colorDiv.dataset.color === newColor) {
                colorDiv.classList.add('active');
            } else {
                colorDiv.classList.remove('active');
            }
        })
    }

    return (
        <SettingsStyled id="settings" ref={settings}>
            <div>
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
            </div>
            <Colors>
                <h3>Colors</h3>
                <ColorContainer>
                    <div data-color="#6495ED" className="active">
                        <FontAwesomeIcon icon={faCheck} onClick={changColor} />
                    </div>
                    <div data-color="rgb(3, 201, 215)">
                        <FontAwesomeIcon icon={faCheck} onClick={changColor} />
                    </div>
                    <div data-color="rgb(115, 82, 255)">
                        <FontAwesomeIcon icon={faCheck} onClick={changColor} />
                    </div>
                    <div data-color="rgb(255, 92, 142)">
                        <FontAwesomeIcon icon={faCheck} onClick={changColor} />
                    </div>
                    <div data-color="rgb(30, 77, 183)">
                        <FontAwesomeIcon icon={faCheck} onClick={changColor} />
                    </div>
                    <div data-color="rgb(251, 150, 120)">
                        <FontAwesomeIcon icon={faCheck} onClick={changColor} />
                    </div>
                </ColorContainer>
            </Colors>
        </SettingsStyled>
    )
}

export default Settings