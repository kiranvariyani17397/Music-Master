import React, { Component } from "react";

class Artist extends Component {
  render() {
    console.log("artist", this.props.artist);

    return <div>{this.props.artist}</div>;
  }
}

export default Artist;
