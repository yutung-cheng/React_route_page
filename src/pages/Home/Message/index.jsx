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
                <Link
                  ///Use `useParams` to pass data.
                  to={`detail/${msgObj.id}/${msgObj.title}`}
                  ///Use `useLocation` to pass data.
                  // to={"detail"}
                  // state={{ id: msgObj.id, title: msgObj.title }}
                  replace //Instead of going back, replace the browser history route.
                >
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
