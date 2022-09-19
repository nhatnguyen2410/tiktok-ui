import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/Pages/Home';
import Following from '@/Pages/Following';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<Following />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
