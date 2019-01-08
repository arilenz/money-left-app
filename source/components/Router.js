import React, { Component } from "react";
import { connect } from "react-redux";

import { changeRoute } from "../store/actions";

class Router extends Component {
  render() {
    const { currentRoute, routes, changeRoute } = this.props;

    const Component = currentRoute ? routes[currentRoute] : routes[Object.keys(routes)[0]];

    return <Component changeRoute={changeRoute} />;
  }
}

export default connect(
  ({ currentRoute }) => ({ currentRoute }),
  { changeRoute }
)(Router);
