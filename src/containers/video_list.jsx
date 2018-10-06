import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchMusic} from '../actions/fetch_music';

class VideoList extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.props.fetchMusic()
  }

  renderVideoList() {
    console.log(this.props)
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

function mapStateToProps({music}) {
  return {music};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchMusic
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList)
