import classNames from 'classnames/bind';
import React from 'react';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    text = false,
    primary = false,
    chilren,
    outline = false,
    small = false,
    medium = false,
    disabled = false,
    rounded = false,
    large,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        medium,
        large,
        text,
        disabled,
        rounded,
        [className]: className,
    });
    const props = { onClick, ...passProps };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            console.log(key);
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{chilren}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
