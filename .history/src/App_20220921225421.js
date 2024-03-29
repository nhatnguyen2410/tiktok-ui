import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '@/Routes';
import { DefaultLayout } from '@/Components/Layout';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        function TotalLayout() {
                            return (
                                <Layout>
                                    <Page />
                                </Layout>
                            );
                        }
                        return <Route key={index} path={route.path} element={<TotalLayout />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
