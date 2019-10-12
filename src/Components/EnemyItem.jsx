import React, {Component} from 'react';
import styles from './Game.module.css';
import './Game.module.css'
import Yoda from "../accets/yoda2.png";

class EnemyItem extends Component {

    onClickImage = () => {
        this.props.incCount()
    };

    render() {
        let classForImage = this.props.isAccent ? styles.show : styles.image;
        return (
            <div className={styles.item}>
                <img alt='EnemyImage'
                     id={this.props.id}
                     src={Yoda}
                     className={classForImage}
                     onClick = {this.onClickImage}
                />
            </div>
        );
    }
}

export default EnemyItem;
