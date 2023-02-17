import React from 'react';
import classes from './Card.module.css'
import {inspect} from "util";

const Card = (props: any) => {
    return (
        <div  className={classes.card}>
            {props.children}
        </div>
    );
};

export default Card;