import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import MainView from '../pages/MainView.tsx';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainView />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes
