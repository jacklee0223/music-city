import React, { Component } from 'react';

export default class Canvas extends Component {
  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
      const ctx = this.refs.canvas.getContext('2d');
      ctx.fillRect(0,0, 100, 100);
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
