import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

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
        <Outlet />
      </div>
    );
  }
}
