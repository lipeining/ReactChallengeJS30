import React, { Component } from "react";
import styled from "styled-components";

class RAudio extends Component {
  constructor(props) {
    super(props);
    this.src = props.src;
    this.state = { playing: false };
    this.audio = new Audio();
  }
  componentDidMount() {
    if (this.state.playing) {
      this.audio.src = this.props.src;
      this.audio.currentTime = 0;
      this.audio.play();
    }
  }
  componentWillUnmount() {}
  render() {
    return <audio src={this.src}></audio>;
  }
}

export default RAudio;
