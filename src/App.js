import React from "react";
import { useRoutes } from "react-router-dom";
import Header from "./components/Header";
import MyNavLink from "./MyNavLink";
import Routes from "./routes";

export default function App() {
  const routes = useRoutes(Routes);
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <MyNavLink to="/home">Home</MyNavLink>
            <MyNavLink to="/about">About</MyNavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* Register Routes */}
              {/* <Routes>
                  {
                    // If not necessary, do not use "exact" keyword in React.
                  }
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  {
                    // *Redirect*
                  }
                  <Route path="/" element={<Navigate replace to="/home" />} />
                </Routes> */}
              {routes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
