import React, { Component } from "react";
import ResourceItem from "./ResourceItem/ResourceItem";
import { connect } from "react-redux";
import "./Resources.css";
import RightSide from "../Sidebars/RightSibebar";

class Resources extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_RESOURCES" });
  }

  toNewResource = () => {
    this.props.history.push("/add-resource");
  };

  render() {
    return (
      <div className="postList">
        <RightSide />
        <div className="content">
          <button onClick={this.toNewResource}>Add Resource</button>
          {this.props.resources.resources.map((resourceItem) => {
            return (
              <ResourceItem key={resourceItem.id} resourceItem={resourceItem} />
            );
          })}
        </div>
      </div>
    );
  }
}

// Makes our reducers available in our component
const mapStateToProps = (state) => {
  return {
    resources: state.resources,
  };
};

export default connect(mapStateToProps)(Resources);
