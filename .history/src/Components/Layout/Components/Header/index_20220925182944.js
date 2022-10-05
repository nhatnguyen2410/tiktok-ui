import classNames from 'classnames';
import React from 'react';

const cx = classNames.bind(styles);

export default function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>hello</div>
        </header>
    );
}
