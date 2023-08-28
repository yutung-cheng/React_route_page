import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Message() {
  const messageArr = [
    { id: "01", title: "Message 1" },
    { id: "02", title: "Message 2" },
    { id: "03", title: "Message 3" },
  ];

  const navigate = useNavigate();

  const navigateShow = (id, title, replace) => {
    navigate("detail", { state: { id: id, title: title }, replace: replace });
  };

  return (
    <div>
      <ul>
        {messageArr.map((msgObj) => {
          return (
            <li key={msgObj.id}>
              <Link
                ///Use `useParams` to pass data.
                to={`detail/${msgObj.id}/${msgObj.title}`}
                ///Use `useLocation` to pass data.
                // to={"detail"}
                // state={{ id: msgObj.id, title: msgObj.title }}
                // replace //Instead of going back, replace the browser history route.
              >
                {msgObj.title}
              </Link>
              &nbsp;
              <button
                className="button"
                onClick={() => navigateShow(msgObj.id, msgObj.title, false)}
              >
                Push
              </button>{" "}
              &nbsp;
              <button
                className="button"
                onClick={() => navigateShow(msgObj.id, msgObj.title, true)}
              >
                Replace
              </button>{" "}
              &nbsp;
            </li>
          );
        })}
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}
