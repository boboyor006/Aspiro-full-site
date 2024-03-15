import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'
import Orders from './pages/Order.jsx'
import Teachers from './pages/Teachers.jsx'
import Stats from './pages/Stats.jsx'
import Settings from './pages/Settings.jsx'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="Orders" element={<Orders/>} />
                    <Route path="Ustozlar" element={<Teachers />} />
                    <Route path="customers" element={<Blank />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="stats" element={<Stats />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
