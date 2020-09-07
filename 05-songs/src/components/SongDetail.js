import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
  console.log('Song Detail props:', props);
  return <div>Song Detail</div>;
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
