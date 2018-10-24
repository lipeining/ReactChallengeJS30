import React, {Component} from 'react';
import classNames from 'classnames/bind';
import styles from './style.css';
const cx = classNames.bind(styles);
const _ = require('lodash');

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        let now = this.state.date;
        const hand = {
            width: '50%',
            height: '6px',
            background: 'black',
            position: 'absolute',
            top: '50%',
            transformOrigin: '100%',
            transition: 'all 0.05s',
            transitionTimingFunction: 'cubic-bezier(0.1, 2.7, 0.58, 1)'
        };
        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        const secondHand = {
            background: 'red',
            transform: `rotate(${secondsDegrees}deg)`
        };
        // const secondHand = _.cloneDeep(hand); secondHand.background = 'red';
        // secondHand.transform = `rotate(${secondsDegrees}deg)`;

        const mins = now.getMinutes();
        const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
        const minsHand = {
            height: '10px',
            background: 'green',
            transform: `rotate(${minsDegrees}deg)`
        };
        // const minsHand = _.cloneDeep(hand); minsHand.height = '10px';
        // minsHand.background = 'green'; minsHand.transform =
        // `rotate(${minsDegrees}deg)`;

        const hour = now.getHours();
        const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
        const hourHand = {
            height: '15px',
            transform: `rotate(${hourDegrees}deg)`
        };
        // const hourHand = _.cloneDeep(hand); hourHand.height = '15px';
        // hourHand.transform = `rotate(${hourDegrees}deg)`;
        return (
            <div className={cx('clock')}>
                <div className={cx('clock-face')}>
                    <div style={hourHand} className={cx('hand')}></div>
                    <div style={minsHand} className={cx('hand')}></div>
                    <div style={secondHand} className={cx('hand')}></div>
                </div>
            </div>
        );
        // let hourHand = cx({     hand: true }); let minHand = cx({     hand: true });
        // let secondHand = cx({     hand: true }); return (     <div
        // className={cx('clock')}>         <div className={cx('clock-face')}>   <div
        // className={hourHand}></div>             <div className={minHand}></div>
        // <div className={secondHand}></div>     </div>     </div> );
    }
}

export default Clock;
