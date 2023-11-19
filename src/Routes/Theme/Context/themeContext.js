import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {

    const [theme, setTheme] = useState(false)

    const toggleTheme = () => {
        setTheme(!theme)
    }

    if (theme) {
        document.body.classList.add('dark-body');
    } else {
        document.body.classList.remove('dark-body');
    }

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )

}
