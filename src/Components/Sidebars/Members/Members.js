import React, { Component } from "react";
import { withRouter } from "react-router";

import { connect } from "react-redux";

class PostItem extends Component {
  state = {
    memberID: this.props.member.id,
  };

  editPost = (event) => {};

  render() {
    const { member } = this.props;
    return (
      <div className="memberItem">
        <p>
          {member.first_name} {member.last_name}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default withRouter(connect(mapStateToProps)(PostItem));
