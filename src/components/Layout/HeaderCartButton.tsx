import React from 'react';
import CardIcon from "./Cart/CardIcon";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props:any) => {
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CardIcon />
            </span>
            <span>Your Card</span>
            <span className={classes.badge}>
                3
            </span>
        </button>
    );
};

export default HeaderCartButton;