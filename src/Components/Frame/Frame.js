import React, { Component } from "react";
import "./Frame.css";

class Frame extends Component {
  render() {
    return (
      <div>
        <div className="topFrame frame">
          <p>HELLOOOO</p>
        </div>
        <div className="leftFrame frame"></div>
        <div className="rightFrame frame"></div>
        <div className="bottomFrame frame"></div>
      </div>
    );
  }
}

export default Frame;
