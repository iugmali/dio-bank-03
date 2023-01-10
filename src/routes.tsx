import { Route, Routes } from "react-router-dom"
import Conta from "./pages/Conta"
import ContaInfo from "./pages/ContaInfo"
import Home from "./pages/Home"

const MainRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta/:id' element={<Conta />} />
            <Route path='/conta/:id/info' element={<ContaInfo />} />
        </Routes>
    )
}

export default MainRoutes
