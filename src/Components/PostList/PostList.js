import React, { Component } from "react";
import PostItem from "./PostItem/PostItem";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import "./PostList.css";

class PostList extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_POSTS" });
  }

  toNewPost = () => {
    this.props.history.push("/add-post");
  };

  render() {
    return (
      <div className="postList">
        <button onClick={this.toNewPost}>Add Post</button>
        {this.props.posts.posts.map((postItem) => {
          return <PostItem key={postItem.id} postItem={postItem} />;
        })}
      </div>
    );
  }
}

// Makes our reducers available in our component
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default withRouter(connect(mapStateToProps)(PostList));
