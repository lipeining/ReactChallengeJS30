import React from "react";
import classNames from "classnames/bind";
import styles from "./style.css";
import * as R from "ramda";
const cx = classNames.bind(styles);

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
    this.setState({ date: new Date() });
  }

  render() {
    let now = this.state.date;
    const getHand = time => {
      const seconds = time.getSeconds();
      const mins = time.getMinutes();
      const hours = time.getHours();
      const secondDegrees = (seconds / 60) * 360 + 90;
      const minDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
      const hourDegrees = (hours / 12) * 360 + (mins / 60) * 30 + 90;
      const hand = {
        width: "50%",
        position: "absolute",
        top: "50%",
        transformOrigin: "100%",
        transition: "all 0.05s",
        transitionTimingFunction: "cubic-bezier(0.1, 2.7, 0.58, 1)"
        // height: "6px",
        // background: "black",
        // transform: `rotate(${degrees}deg)`
      };
      return {
        hourHand: Object.assign(
          {
            height: "15px",
            background: "black",
            transform: `rotate(${hourDegrees}deg)`
          },
          hand
        ),
        minHand: Object.assign(
          {
            height: "10px",
            background: "green",
            transform: `rotate(${minDegrees}deg)`
          },
          hand
        ),
        secondHand: Object.assign(
          {
            height: "5px",
            background: "red",
            transform: `rotate(${secondDegrees}deg)`
          },
          hand
        )
      };
    };
    const hands = getHand(now);
    return (
      <div className={cx("clock")}>
        <div className={cx("clock-face")}>
          <div style={R.prop("hourHand", hands)} className={cx("hand")}></div>
          <div style={R.prop("minHand", hands)} className={cx("hand")}></div>
          <div style={R.prop("secondHand", hands)} className={cx("hand")}></div>
        </div>
      </div>
    );
  }
}

export default Clock;
