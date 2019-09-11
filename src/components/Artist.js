import React from "react";

const Artist = ({artist}) => {
    const {name, followers, genres, images} = artist
    return (
    <div>
      <h3>{name}</h3>
      <p>{followers.total} followers</p>
      <p>{genres.join(",")}</p>
      <img src={images[0] && images[0].url}
       alt="artist-profile"
       style={{
         width: 200,
         height: 200,
         borderRadius: 100,
         ObjectFit: 'cover'
       }}
      />
    </div>
    );
  }

export default Artist;
