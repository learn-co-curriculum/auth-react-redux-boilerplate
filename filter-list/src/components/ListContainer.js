import React from 'react';
import { connect } from 'react-redux';
import ArtistItem from './ArtistItem';
import FilterForm from './FilterForm';

function ListContainer(props) {
  const artists = props.artistData.map((artistObj, idx) => <ArtistItem key={idx} {...artistObj}></ArtistItem>);

  return (
    <div>
      <FilterForm />
      {artists}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    artistData: state.listReducer.artistData
  }
}

export default connect(mapStateToProps)(ListContainer);
