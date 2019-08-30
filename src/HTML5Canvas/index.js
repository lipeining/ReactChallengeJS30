import React from "react";

class HTML5Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawing: false
    };
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.draw = this.draw.bind(this);
    this.lastX = 0;
    this.lastY = 0;
    this.hue = 0;
    this.isDrawing = true;
    this.direction = true;
  }

  componentDidMount() {
    // const canvas = document.querySelector("#draw");
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    console.log(ctx);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.strokeStyle = "#BADA55";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 100;
    this.canvas = canvas;
    this.ctx = ctx;
  }

  componentWillUnmount() {}
  draw(e) {
    // console.log(e);
    // console.log(this.refs.canvas2d);
    // console.log(this.isDrawing);
    // if (!this.isDrawing) {
    //   return;
    // }
    // console.log(this.state);
    // console.log("move", this.state);
    console.log(this.lastX, this.lastY);
    console.log(e.target);
    console.log(e.offsetX, e.offsetY);
    this.ctx.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
    this.ctx.beginPath();
    // start from
    this.ctx.moveTo(this.lastX, this.lastY);
    // go to
    this.ctx.lineTo(e.offsetX, e.offsetY);
    this.ctx.stroke();
    [this.lastX, this.lastY] = [e.offsetX, e.offsetY];

    this.hue++;
    if (this.hue >= 360) {
      this.hue = 0;
    }
    if (this.ctx.lineWidth >= 100 || this.ctx.lineWidth <= 1) {
      this.direction = !this.direction;
    }

    if (this.direction) {
      this.ctx.lineWidth++;
    } else {
      this.ctx.lineWidth--;
    }
    // ctx.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
    // ctx.beginPath();
    // // start from
    // ctx.moveTo(this.lastX, this.lastY);
    // // go to
    // ctx.lineTo(e.offsetX, e.offsetY);
    // ctx.stroke();
    // [this.lastX, this.lastY] = [e.offsetX, e.offsetY];

    // this.hue++;
    // if (this.hue >= 360) {
    //   this.hue = 0;
    // }
    // if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    //   this.direction = !this.direction;
    // }

    // if (this.direction) {
    //   ctx.lineWidth++;
    // } else {
    //   ctx.lineWidth--;
    // }
  }
  onMouseDown(e) {
    // console.log(e);
    // console.log("down", this.state);
    this.setState({ isDrawing: true });
    // console.log(this.state);
    this.isDrawing = true;
    [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
  }
  onMouseUp(e) {
    // console.log(e);
    // console.log("up", this.state);
    this.setState({ isDrawing: false });

    // this.isDrawing = false;
  }
  onMouseOut(e) {
    // console.log(e);
    // this.setState({ isDrawing: false });
    // this.isDrawing = false;
  }
  render() {
    return (
      <div>
        <canvas
          ref="canvas"
          id="draw"
          onMouseMove={this.draw}
          onMouseDown={this.onMouseDown}
          onMouseUp={this.onMouseUp}
          onMouseOut={this.onMouseOut}
          width="800"
          height="800"
        ></canvas>
      </div>
    );
  }
}

export default HTML5Canvas;
