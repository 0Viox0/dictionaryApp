import { Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { Home } from './pages/Home';
import { Starred } from './pages/Starred';

import './styles/index.scss';

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/starred" element={<Starred />} />
            </Route>
        </Routes>
    );
}
