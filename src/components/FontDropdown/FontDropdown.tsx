import { useState } from "react";
import ArrowDownIcon from "@/assets/images/icon-arrow-down.svg?react";
import styles from "./FontDropdown.module.css";

type Font = {
    name: "sans serif" | "serif" | "mono";
    fontName: "Inter" | "Lora" | "Aliquam Mono";
}

const fonts: Font[] = [
    {name : "sans serif", fontName : "Inter"},
    {name : "serif", fontName : "Lora"},
    {name : "mono", fontName : "Aliquam Mono"}
];

function getInitialFont() {
    const font = localStorage.getItem("font") || "sans serif";

    const root = document.documentElement;
    root.setAttribute("data-font", font);

    return font;
}

function FontDropdown() {
    const [open, setOpen] = useState<boolean>(false);
    const [selectedFont, setSelectedFont] = useState<string>(getInitialFont());

    const onFontChange = (font: string) => {
        const root = document.documentElement;
        root.setAttribute("data-font", font);
        localStorage.setItem("font", font);

        setSelectedFont(font);
        setOpen(false);
    };

    return (
        <div className={styles.dropdown}>
            <button
                className={styles.toggle}
                onClick={() => setOpen(!open)}
            >
                <p className="body-md capitalize bold">{selectedFont}</p>
                <ArrowDownIcon
                    className={styles.fontDropdownArrow}
                    style={{transform : open ? "rotate(180deg)" : "rotate(0deg)"}}
                />
            </button>

            {open &&
                <div className={styles.hoverMenu}>
                    <ul className={styles.fontList}>
                        {
                            fonts.map((font: Font) =>
                                <li key={font.name}>
                                    <button
                                        className={styles.fontButton}
                                        onClick={() => onFontChange(font.name)}
                                    >
                                        <p
                                            className={`${styles.font} body-md bold capitalize`}
                                            style={{fontFamily : font.fontName}}
                                        >
                                            {font.name}
                                        </p>
                                    </button>
                                </li>
                            )
                        }
                    </ul>
                </div>
            }
        </div>
    );
}

export default FontDropdown;