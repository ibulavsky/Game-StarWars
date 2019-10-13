import React, {Component} from 'react';
import styles from './Game.module.css';
import './Game.module.css'
import Yoda2 from "../accets/yoda2.png"
import Yoda from "../accets/yoda.png";

class EnemyItem extends Component {

    state = {
        itemClass: styles.item,
        disable: true,
    };

    showResult = (status) => {
        switch (status) {
            case  'clicked' :
                this.setState({
                    itemClass: styles.clicked
                });
                break;
            case 'miss' :
                this.setState({
                        itemClass: styles.missed
                    }
                );
                break;
            default :
                this.setState({
                        itemClass: styles.item
                    }
                )
        }
    };

    onPassRound = () => {
        if (this.props.isAccent) {
            // отображается рамка успешного попадания
            this.showResult('clicked');
            // обновляется счетчик
            this.props.incCount();
            // как минимум через 300мс рамка исчезает
            setTimeout(
                () => {
                    this.showResult();
                }, 300);
        } else {
            // отображается рамка ошибочного клика
            this.showResult('miss');
            // как минимум через 300мс рамка исчезает
            setTimeout(
                () => {
                    this.showResult();
                }, 300);
        }

    };

    render() {
        // let YodaImage = !this.state.disable ? Yoda : Yoda2;
        return (
            <div className={this.state.itemClass}
                 onClick={this.onPassRound}>
                {this.props.isAccent ?
                    <img alt='EnemyImage'
                         id={this.props.id}
                         src={Yoda}
                         className={styles.show}
                    />
                    : <div className={styles.show}>{null}</div>
                }
            </div>
        );

    }
}

export default EnemyItem;
