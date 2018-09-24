import React, { Component } from 'react';

export default class VideoList extends Component {
  renderVideoList() {
    const videoList = ['AAA', 'BBB', 'CCC']

    const result = videoList.map( video => {
      return (
        <li>
          {video}
        </li>
      )
    } )

    return (
      <ul>
        {result}
      </ul>
    )
  }

  render() {
    return (
      <div>
        {this.renderVideoList()}
      </div>
    )
  }
}
