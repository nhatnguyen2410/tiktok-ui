import React from 'react';
import SideBar from './SideBar';
import Header from '@/Components/Layout/Components/Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function DefaultLayout({ children }) {
    return (
        <div>
            <Header className={cx('wrapper')} />
            <div className={cx('wrapper')}>
                <SideBar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}
