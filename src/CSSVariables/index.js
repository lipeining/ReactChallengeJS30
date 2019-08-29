import React from "react";
import classNames from "classnames/bind";
import styles from "./style.css";
const cx = classNames.bind(styles);

class CssVariables extends React.Component {
  constructor(props) {
    super(props);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.handleSpacing = this.handleSpacing.bind(this);
    this.state = {
      spacing: 0,
      blur: 0,
      color: "#ffc600"
    };
  }
  handleSpacing(e) {
    // e.preventDefault();
    console.log(e.target.value);
    this.setState({ spacing: e.target.value });
    document.documentElement.style.setProperty(
      `--spacing`,
      e.target.value + "px"
    );
  }
  handleBlur(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({ blur: e.target.value });
    document.documentElement.style.setProperty(`--blur`, e.target.value + "px");
  }
  handleColor(e) {
    // e.preventDefault();
    console.log(e.target.value);
    this.setState({ color: e.target.value });
    document.documentElement.style.setProperty(`--base`, e.target.value);
  }
  render() {
    return (
      <div className={cx("content")}>
        <h2>
          Update CSS Variables with
          <span className={"hl"}>JS</span>
        </h2>
        <div className={cx("controls")}>
          <label>
            Spacing:
            <input
              type="range"
              name="spacing"
              min="10"
              max="200"
              value={this.state.spacing}
              onChange={this.handleSpacing}
              data-sizing="px"
            ></input>
          </label>
          <label>
            Blur:
            <input
              type="range"
              name="blur"
              min="0"
              max="25"
              value={this.state.blur}
              onChange={this.handleBlur}
              data-sizing="px"
            ></input>
          </label>
          <label>
            Base Color
            <input
              type="color"
              name="base"
              onChange={this.handleColor}
              value={this.state.color}
            ></input>
          </label>
        </div>
        <img
          src="https://source.unsplash.com/7bwQXzbF6KE/800x500"
          alt="test_img"
        ></img>
      </div>
    );
  }
}

export default CssVariables;
