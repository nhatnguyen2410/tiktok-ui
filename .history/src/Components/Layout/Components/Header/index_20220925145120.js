import classNames from 'classnames';
import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
    const cx = classNames.bind(styles);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>hello</div>
        </header>
    );
}
