import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import MyNavLink from "./MyNavLink";

export default class App extends Component {
  render() {
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
                <Routes>
                  {/* If not necessary, do not use "exact" keyword in React. */}
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  {/* *Redirect* */}
                  <Route path="/" element={<Navigate replace to="/home" />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
