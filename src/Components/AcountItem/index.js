import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/59e90d3fc1d9c9d5351f94a80ae0fc4f~c5_100x100.jpeg?x-expires=1688220000&x-signature=K%2B7ub1zEwfzp6Ere35j23oIXrrc%3D"
                alt="Hoaa"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
