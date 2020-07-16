import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Header.css";

const Nav = (props) => (
  <div className="nav">
    <div className="header">
      <Link to="/home">
        <h1 className="nav-title">Emerging Digital Network</h1>
      </Link>
    </div>
    <div className="navbar">
      <div className="nav-left">
        <Link className="nav-link" to="/home">
          {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
          {props.user.id ? "Home" : "Login / Register"}
        </Link>
      </div>
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          <div className="nav-left">
            <Link className="nav-link" to="/resources">
              Resources
            </Link>
          </div>
          <div className="nav-right">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
            <LogOutButton className="nav-link" />
          </div>
        </>
      )}
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);