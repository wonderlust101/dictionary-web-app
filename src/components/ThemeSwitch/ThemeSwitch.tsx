import { useEffect, useState } from "react";

import styles from "./ThemeSwitch.module.css";

import MoonIcon from "@/assets/images/icon-moon.svg?react";

const getInitialTheme = () => {
    const stored = localStorage.getItem("theme");

    if (stored === "light" || stored === "dark")
        return stored;

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
};

function ThemeSwitch() {
    const [theme, setTheme] = useState<"dark" | "light">(getInitialTheme);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    });

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className={styles.themeSwitch}>
            <button
                type="button"
                className={styles.switchTrack}
                role="switch"
                aria-checked={theme === "dark"}
                aria-label={`Toggle ${theme === "dark" ? "light" : "dark"} mode`}
                onClick={toggleTheme}
            >
                <span className={styles.switchThumb}/>
            </button>

            <MoonIcon/>
        </div>
    );
}

export default ThemeSwitch;