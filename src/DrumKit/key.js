import React, { Component } from "react";
import styled from "styled-components";

import classNames from "classnames/bind";
import styles from "./style.css";
const cx = classNames.bind(styles);

const Span = styled.span`
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: #ffc600;
`;
const Kbd = styled.kbd`
  display: block;
  font-size: 4rem;
`;

class KeyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.playing = props.playing;
    this.tmpK = props.tmpK;
    this.onTransitionEnd = this.onTransitionEnd.bind(this);
  }
  onTransitionEnd(e) {
    if (e.propertyName !== "transform") return;
    this.props.onTransitionEnd(this.tmpK.kbd);
  }

  render() {
    let className = cx({
      key: true,
      playing: this.props.playing
    });
    return (
      <div className={className} onTransitionEnd={this.onTransitionEnd}>
        <Kbd>{this.tmpK.kbd}</Kbd>
        <Span>{this.tmpK.name}</Span>
      </div>
    );
  }
}

export default KeyComponent;
