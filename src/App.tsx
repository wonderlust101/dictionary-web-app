import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "@/layout/AppLayout/AppLayout.tsx";
import Home from "@/components/Home/Home.tsx";

const basename: string = import.meta.env.BASE_URL;

function App() {
    return (
        <BrowserRouter basename={ basename }>
            <Routes>
                <Route element={ <AppLayout/> }>
                    <Route path="/" element={<Home/> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
