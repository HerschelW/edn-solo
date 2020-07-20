import React, { Component } from "react";
import { withRouter } from "react-router";

import { connect } from "react-redux";
import { Text } from "@chakra-ui/core";

class PostItem extends Component {
  state = {
    memberID: this.props.member.id,
  };

  editPost = (event) => {};

  render() {
    const { member } = this.props;
    return (
      <div className="memberItem">
        <Text>
          {member.first_name} {member.last_name}
        </Text>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default withRouter(connect(mapStateToProps)(PostItem));
