import React from 'react';
import Button from '@/Components/Button';
import styles from './Menu.module.scss';
function MenuItem({ data }) {
    console.log(data.name);
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
            {data.name}
        </Button>
    );
}

export default MenuItem;
