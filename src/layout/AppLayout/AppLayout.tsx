import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header.tsx";
import styles from "./AppLayout.module.css";

function AppLayout() {
    return (
        <main className={`${styles.appLayout} grid-bleed`}>
            <Header/>

            <main className={styles.mainLayout}>
                <Outlet/>
            </main>
        </main>
    );
}

export default AppLayout;