import React, { Component } from "react";

export default class Home extends Component {
  render() {
    console.log("Home receive props", this.props.history);

    return <h3>Home</h3>;
  }
}
