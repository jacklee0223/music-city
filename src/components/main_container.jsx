import React, { Component } from 'react';
import VideoList from '../containers/video_list'

export default class MainContainer extends Component {
  render() {
    return (
      <div className="main-container">
        <VideoList />
      </div>
    );
  }
}
