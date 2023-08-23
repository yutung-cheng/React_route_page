import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MyNavLink extends Component {
  render() {
    return (
      <NavLink
        className={({ isActive }) =>
          isActive ? "list-group-item active-route" : "list-group-item"
        }
        {...this.props}
      />
    );
  }
}
