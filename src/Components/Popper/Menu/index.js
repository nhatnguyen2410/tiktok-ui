import Tippy from '@tippyjs/react';
import HeadLessTippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '@/Components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);
function Menu({ children, items = [], onChange = () => {} }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    data={item}
                    key={index}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    useEffect(() => {}, []);
    return (
        <HeadLessTippy
            delay={[0, 700]}
            placement="bottom-end"
            interactive
            onHidden={() => {
                setHistory(history.slice(0, 1));
            }}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={'Language'}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </HeadLessTippy>
    );
}

export default Menu;
