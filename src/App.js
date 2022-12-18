// src/App.js
import { Route, Routes } from 'react-router-dom'; //Route는 Route 컴포넌트를 묶어주고, Route는 링크를 생성해주는 컴포넌트
import Home from './pages/Home';
import Explore from './pages/Explore';
import Subscription from './pages/Subscription';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/subscription" element={<Subscription />} />
        </Routes>
    );
}

export default App;