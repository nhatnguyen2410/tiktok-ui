import React from 'react';
import Header from './Header';
import SideBar from './SideBar';

export default function DefaultLayout() {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="content"></div>
            </div>
        </div>
    );
}
