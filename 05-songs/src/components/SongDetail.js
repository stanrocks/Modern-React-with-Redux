import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
  console.log('Song Detail props:', props);
  const { mySelectedSong } = props;
  // if song is not selected yet
  if (!mySelectedSong) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {mySelectedSong.title}
        <br />
        Duration: {mySelectedSong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { mySelectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
