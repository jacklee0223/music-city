import React, { Component } from 'react';

export default class Canvas extends Component {
  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" id="myCanvas" width="200" height="100">
Your browser does not support the HTML5 canvas tag.</canvas>
      </div>
    )
  }
}
