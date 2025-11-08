import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header.tsx";
import styles from "./AppLayout.module.css";

function AppLayout() {
    return (
        <div className={`${styles.appLayout} grid-bleed`}>
            <Header/>

            <main className={styles.mainLayout}>
                <Outlet/>
            </main>
        </div>
    );
}

export default AppLayout;