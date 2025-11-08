import styles from "./Header.module.css"
import Logo from "@/assets/images/logo.svg?react"
import ThemeSwitch from "@/components/ThemeSwitch/ThemeSwitch.tsx";
import FontDropdown from "@/components/FontDropdown/FontDropdown.tsx";

function Header() {
    return (
        <header className={styles.header}>
            <Logo/>

            <div className={styles.headerSettings}>
                <FontDropdown/>
                <ThemeSwitch/>
            </div>
        </header>
    );
}

export default Header;