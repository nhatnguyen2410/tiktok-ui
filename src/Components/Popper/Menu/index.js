import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '@/Components/Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    console.log({ items });
    return (
        <Tippy
            visible
            placement="bottom-end"
            interactive
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {items.map((item, index) => (
                            <MenuItem data={item} key={index} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
