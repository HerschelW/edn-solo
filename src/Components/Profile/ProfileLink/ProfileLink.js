import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Icon, Link } from "@chakra-ui/core";

class ProfileLink extends Component {
  render() {
    const { profileLink } = this.props;
    return (
      <div>
        <Link
          target="_blank"
          href={`https://${profileLink.profile_url}`}
          isExternal
        >
          {profileLink.platform_name} <Icon name="external-link" mx={1} />
        </Link>
      </div>
    );
  }
}

export default ProfileLink;
