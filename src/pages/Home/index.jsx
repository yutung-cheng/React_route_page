import React, { Component } from "react";
import MyNavLink from "../../MyNavLink";
import { Outlet } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>Home</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="message">Message</MyNavLink>
            </li>
          </ul>
          <br />
        </div>
        <Outlet />
      </div>
    );
  }
}
