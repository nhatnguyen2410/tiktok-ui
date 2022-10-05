import React from 'react';
import Header from '../Components/Header';
import SideBar from './SideBar';

export default function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}
