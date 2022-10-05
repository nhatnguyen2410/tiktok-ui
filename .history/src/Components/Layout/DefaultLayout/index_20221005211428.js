import React from 'react';
import SideBar from './SideBar';
import Header from '@/Components/Layout/Components/Header';
import styles from './DefaultLayout.module.css';
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
