import React from "react";
import styled from "styled-components";
import DrumKits from "./DrumKits";
// import keydown from "react-keydown";
// import RAudio from "./RAudio";
// import './style.css';
import KeyComponent from "./key";

const Keys = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

// const keyList = DrumKits.map((tmpK) => {     return tmpK.kbd; });

class DrumKit extends React.Component {
  constructor(props) {
    super(props);
    this.onkeyDownHandler = this.onkeyDownHandler.bind(this);
    this.onTransitionEnd = this.onTransitionEnd.bind(this);
    this.state = {
      keyCode: null
    };
  }

  // @keydown('a') handleKeys(e) {     console.log(e.keyCode); }

  onkeyDownHandler(e) {
    const keyCode = e.keyCode;
    console.log(keyCode);
    // debugger;
    this.setState({ keyCode: e.keyCode });
    // 这个audio 无法找到src http://localhost:3000/sounds/name.wav audio.play();
  }
  componentDidUpdate(prevProps, prevState) {
    // 直接更新鼓声即可
  }
  componentDidMount() {
    window.addEventListener("keydown", this.onkeyDownHandler);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.onkeyDownHandler);
  }
  onTransitionEnd(kbd) {
    // 应该是交到子组件去处理的。子组件会知道自己的kbd
    console.log(kbd);
    // 将对应的kbd的playing转为false
    this.setState({ keyCode: null });
  }
  render() {
    let keyCode = this.state.keyCode;
    return (
      <div>
        <Keys>
          {DrumKits.map(tmpK => {
            // 这里读不到this?
            let playing = tmpK.key === keyCode;
            // debugger;
            // let playing = true;
            return (
              <KeyComponent
                key={tmpK.kbd}
                tmpK={tmpK}
                playing={playing}
                onTransitionEnd={this.onTransitionEnd}
              ></KeyComponent>
            );
          })}
        </Keys>
        {DrumKits.map(tmpK => {
          return (
            <audio
              src={`./sounds/${tmpK.name}.wav`}
              key={tmpK.kbd}
              data-key={tmpK.key}
            ></audio>
          );
          // return <RAudio src={`/sounds/${tmpK.name}.wav`} key={tmpK.kbd}></RAudio>
        })}
      </div>
    );
  }
}

export default DrumKit;
