import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PostItem from "../PostList/PostItem/PostItem";

class Profile extends Component {
  state = {};

  componentDidMount() {
    this.getProfile();
    this.getUserLinks();
    this.getUserPosts();
  }

  getProfile = () => {
    this.props.dispatch({
      type: "FETCH_PROFILE",
    });
  };

  getUserLinks = () => {
    this.props.dispatch({
      type: "FETCH_USER_LINKS",
    });
  };

  getUserPosts = () => {
    this.props.dispatch({
      type: "FETCH_USER_POSTS",
    });
  };

  render() {
    const { user, profile, profileData, profileLinks } = this.props;
    return (
      <div className="content">
        <h1 className="profile">
          {user.first_name} {user.last_name}
        </h1>
        <button onClick={this.editProfile} Edit Profile></button>
        <p className="profile">{profileData.bio}</p>
        {profileLinks.map((profileLink) => {
          return (
            <a href={profileLink.profile_url}>{profileLink.platform_name}</a>
          );
        })}
        {profile.profilePosts.map((postItem) => {
          return <PostItem key={postItem.id} postItem={postItem} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  profile: state.profile,
  profileData: state.profile.profile[0],
  profileLinks: state.profile.profileLinks,
});

export default withRouter(connect(mapStateToProps)(Profile));
