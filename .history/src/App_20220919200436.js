import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/Pages/Home';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={Home} />
                    <Route path="/" element={Home} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
