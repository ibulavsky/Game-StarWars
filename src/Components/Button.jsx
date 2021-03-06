import React from 'react';
import './App.css';

const Button = (props) => {

    const onClick = () => props.onClick();

    let classButton = "button";

    {
        props.disabled
        ? classButton = "disabled"
        : classButton = "button"
    }

    return (
        <button className={classButton} title={props.name} disabled={props.disabled}
                onClick={onClick}>
            {props.name}
        </button>
    );
};

export default Button;

