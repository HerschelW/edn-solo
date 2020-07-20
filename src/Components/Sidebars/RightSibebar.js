import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import Members from "./Members/Members";
import "./Sidebars.css";
import { Heading } from "@chakra-ui/core";

class RightSideBar extends Component {
  render() {
    return (
      <div className="rightSide">
        <table>
          <thead>
            <Heading as="h3" size="md">
              Network
            </Heading>
          </thead>
          <tbody>
            {this.props.members.members.map((member) => {
              return (
                <tr>
                  <td>
                    <Members key={member.id} member={member} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

// Makes our reducers available in our component
const mapStateToProps = (state) => {
  return {
    members: state.members,
  };
};

export default withRouter(connect(mapStateToProps)(RightSideBar));
