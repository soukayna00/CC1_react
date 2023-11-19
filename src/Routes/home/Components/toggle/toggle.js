import React, { useContext } from 'react'
import FrenchFlag from '../../assets/fr.svg'
import GermanFlag from '../../assets/de.svg'
import EnglishFlag from '../../assets/en.svg'
import { Context } from '../../Context/langContext'
import './toggle.css'

export default function ToggleLangs() {

    const { setLang } = useContext(Context)

    return (
        <div className='container-langs'>

            <img alt='french' onClick={() => setLang('fr')} src={FrenchFlag} />
            <img alt='english' onClick={() => setLang('en')} src={EnglishFlag} />
            <img alt='deutch' onClick={() => setLang('de')} src={GermanFlag} />

        </div>
    )
}
