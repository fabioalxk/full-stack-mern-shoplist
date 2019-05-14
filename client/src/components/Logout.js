import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutAction } from "../actions/authActions";

class Logout extends Component {
  logout = () => {
    this.props.logoutAction();
  };
  render() {
    return <span onClick={this.logout}>Logout</span>;
  }
}

export default connect(
  null,
  { logoutAction }
)(Logout);
