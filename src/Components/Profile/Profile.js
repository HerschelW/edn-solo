import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PostItem from "../PostList/PostItem/PostItem";
import { Link, Heading, Button } from "@chakra-ui/core";
import { VARIANT_COLOR } from "../ThemSelector/ThemeSelector";

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
        <Heading className="profile">
          {user.first_name} {user.last_name}
        </Heading>
        <Button variantColor={VARIANT_COLOR} mb={4} onClick={this.editProfile}>
          Edit Profile
        </Button>
        <p className="profile">{profileData.bio}</p>
        {profileLinks.map((profileLink) => {
          return (
            <Link role="link" href={profileLink.profile_url} isExternal>
              {profileLink.platform_name}
            </Link>
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
