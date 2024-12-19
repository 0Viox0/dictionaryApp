import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import './styles/index.scss';
import { Layout } from './components';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
    return (
        // Provider и BrowserRouter выносят в main.tsx а в App.tsx оставляют Routes
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/starred" element={<Starred />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
