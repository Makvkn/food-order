import React from 'react';
import classes from './Input.module.css';

const Input = (props: any) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}  >{props.label}</label>
            <input id={props.input.id} type="text" {...props.input}/>
        </div>
    );
};

export default Input;