import classNames from 'classnames';
import React from 'react';
import styles from '../../Components/Header/Header.module.scss';

const cx = classNames.bind(styles);

export default function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>header</div>
        </header>
    );
}
