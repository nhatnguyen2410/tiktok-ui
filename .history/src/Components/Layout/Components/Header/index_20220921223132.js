import classNames from 'classnames';
import React from 'react';
import styles from './DefaultLayout.module.scss';
import SideBar from '../../DefaultLayout/SideBar';
const cx = classNames.bind(styles);

export default function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>hi</div>
        </header>
    );
}
