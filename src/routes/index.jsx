import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Message from "../pages/Home/Message";
import News from "../pages/Home/News";
import Detail from "../pages/Home/Message/Detail";

const routes = [
  {
    path: "/home/*",
    element: <Home />,
    children: [
      { path: "news", element: <News /> },
      {
        path: "message/*",
        element: <Message />,
        children: [{ path: "detail", element: <Detail /> }],
      },
      {
        path: "*",
        element: <Navigate to="/home/news" />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <Navigate to="/home" />,
  },
];

export default routes;
