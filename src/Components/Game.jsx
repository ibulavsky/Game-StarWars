import React, {Component} from 'react';
import styles from './Game.module.css';
import EnemyItem from "./EnemyItem";
import Counter from "./Counter";
import {connect} from "react-redux";
import {accentValue, incValue} from "../store/reducer";
import Button from "./Button.jsx";


class Game extends Component {


    componentDidMount() {
    }

    interval = () => {
        setInterval(() => {
            let a = this.randomNumber();
            console.log(a);
            this.props.accValue(a)
        }, 1000)
    };

    randomNumber = () => {
        return Math.floor(Math.random() * 9 + 1);
    };

    incCount = () => {
        this.props.incValue()
    };

    render() {

        return (
            <div className={styles.wrapper}>
                {this.props.items.map(m => {
                    return (<EnemyItem id={m.id}
                                       isAccent={m.isAccent}
                                       incCount={this.incCount}
                                       key={m.id}
                    />)
                })}
                <Counter countValue={this.props.countValue}/>
                <Button onClick={this.interval} name='START'/>
            </div>
        );
    }
}


let mstp = (state) => {
    return state;
};
let mdtp = (dispatch) => {
    return {
        incValue: () => dispatch(incValue()),
        accValue: (a) => dispatch(accentValue(a))
    }
};


export default connect(mstp, mdtp)(Game);
