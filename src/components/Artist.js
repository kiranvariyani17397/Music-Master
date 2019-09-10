import React, { Component } from "react";

class Artist extends Component {
  render() {
    console.log("artist", this.props.artist);

    return <div>Artist</div>;
  }
}

export default Artist;
