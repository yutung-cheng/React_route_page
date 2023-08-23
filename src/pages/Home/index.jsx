import React, { Component } from "react";
import MyNavLink from "../../MyNavLink";
import { Routes, Route, Navigate } from "react-router-dom";
import News from "./News";
import Message from "./Message";

export default class Home extends Component {
  render() {
    console.log("Home receive props", this.props.history);

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
        </div>
        <Routes>
          <Route path="news" element={<News />} />
          <Route path="message" element={<Message />} />
          <Route path="/*" element={<Navigate replace to="news" />} />
        </Routes>
      </div>
    );
  }
}
