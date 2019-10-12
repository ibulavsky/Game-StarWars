import React from 'react';
import styles from './Game.module.css';

function Counter(props) {
    return (
        <div className={styles.counter} onClick={props.onClick}>
            {props.countValue}
        </div>
    );
}

export default Counter;
