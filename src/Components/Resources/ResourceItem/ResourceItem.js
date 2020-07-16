import React, { Component } from "react";
import { withRouter } from "react-router";

import { connect } from "react-redux";

class ResourceItem extends Component {
  render() {
    return (
      <div className="resourceItem postItem">
        <h2>{this.props.resourceItem.title}</h2>
        <p>{this.props.resourceItem.body}</p>
        <p>{this.props.resourceItem.upvote_count}</p>
        <button>Comment</button>
        <button>Like</button>
        <button>Report</button>
      </div>
    );
  }
}

export default withRouter(connect()(ResourceItem));
