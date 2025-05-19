import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Root from "../pages/Root.tsx";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Root />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes
