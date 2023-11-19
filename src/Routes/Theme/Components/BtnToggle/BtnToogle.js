import React, { useContext } from 'react';
import './BtnToogle.css';
import { ThemeContext } from '../../Context/themeContext';
import '@fortawesome/fontawesome-free/css/all.css';


export default function BtnToggle() {
    const { toggleTheme, theme } = useContext(ThemeContext);

    return (
        <div>
            <input type="checkbox" className="checkbox" id="checkbox" onClick={toggleTheme} />
            <label htmlFor="checkbox" className="checkbox-label">
                <i className={theme ?"fas fa-moon":"fas fa-sun"}></i>
                <span className="ball" ></span>
            </label>
        </div>
    );
}

