import React, {createContext, useState} from 'react' 



export  const Context = createContext();

let browserLang = 'en';

export default function ContextProvider ({children})   {

    const [lang, setLang] = useState(browserLang)

    

    return (
        <Context.Provider value={{lang, setLang}}>
            {children}
        </Context.Provider>
    )

}


