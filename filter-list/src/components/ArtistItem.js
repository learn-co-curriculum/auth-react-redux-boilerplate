import React from 'react';

export default function ArtistItem(props) {
  return (
    <div>
      <p>{props.artist}</p>
      <p>{props.album}</p>
    </div>
  );
}
