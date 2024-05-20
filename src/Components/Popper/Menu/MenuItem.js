import React from 'react';
import Button from '@/Components/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function MenuItem({ data, onClick = () => {} }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button onClick={onClick} className={classes} leftIcon={data.icon} to={data.to}>
            {data.name}
        </Button>
    );
}

export default MenuItem;
