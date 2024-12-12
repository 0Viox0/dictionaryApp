import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import './styles/index.scss';
import Layout from './components/layout/Layout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/starred" element={<Starred />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
