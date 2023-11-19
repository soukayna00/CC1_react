import React, { useContext } from 'react'
import { Context } from '../../Context/langContext'
import './contenu.css'
import data from '../../assets/data.js';
import { ThemeContext } from '../../../Theme/Context/themeContext.js';


export default function Contenu() {

    const { lang } = useContext(Context);
    const { theme } = useContext(ThemeContext);



    return (
        <div className={theme?'contenu-light':'contenu-dark'}>
            <h1 className="title">{data[lang].title}</h1>
            <p className="content-txt">{data[lang].text}</p>
        </div>
    )
}
