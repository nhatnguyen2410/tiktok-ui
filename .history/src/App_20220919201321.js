import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '@/Routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route,key)=>{
                        return <Route path={route.path} element={}/>
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
