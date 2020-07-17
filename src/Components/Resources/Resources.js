import React, { Component } from "react";
import ResourceItem from "./ResourceItem/ResourceItem";
import { connect } from "react-redux";
import "./Resources.css";
import RightSide from "../Sidebars/RightSibebar";
import { Box, Button, IconButton } from "@chakra-ui/core";

class Resources extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_RESOURCES" });
  }

  toNewResource = () => {
    this.props.history.push("/add-resource");
  };

  render() {
    return (
      <div className="content">
        <RightSide />
        <Box>
          <Button onClick={this.toNewResource}>Add Resource</Button>
          {this.props.resources.resources.map((resourceItem) => {
            return (
              <ResourceItem key={resourceItem.id} resourceItem={resourceItem} />
            );
          })}
        </Box>
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
