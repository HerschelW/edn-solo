import React from "react";
import { connect } from "react-redux";
import PostList from "../PostList/PostList";
import RightSide from "../Sidebars/RightSibebar";

const HomePage = (props) => (
  <div>
    <div className="content">
      <PostList />
    </div>
    <RightSide />
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = (state) => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(HomePage);
