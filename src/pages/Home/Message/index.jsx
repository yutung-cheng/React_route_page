import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Detail from "./Detail";

export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "Message 1" },
      { id: "02", title: "Message 2" },
      { id: "03", title: "Message 3" },
    ],
  };
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((msgObj) => {
            //...
            return (
              <li key={msgObj.id}>
                <Link to={`detail/${msgObj.id}/${msgObj.title}`}>
                  {msgObj.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <hr />
        <Routes>
          <Route path="detail/:id/:title" element={<Detail />} />
        </Routes>
      </div>
    );
  }
}
