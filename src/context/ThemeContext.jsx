import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {

    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem("theme") || "dark";
        } catch (e) {
            return "dark";
        }
    });

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            theme
        );
        try {
            localStorage.setItem(
                "theme",
                theme
            );
        } catch (e) {
            // Ignore if localStorage is blocked or throws error
        }
    }, [theme]);

    return (

        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
            }}
        >

            {children}

        </ThemeContext.Provider>

    );

}