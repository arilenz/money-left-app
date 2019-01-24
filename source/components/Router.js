import React, { Component } from "react";
import { connect } from "react-redux";

import { changeRoute } from "../store/actions";

class Router extends Component {
  render() {
    const { current, routes, changeRoute } = this.props;

    const Component = current ? routes[current] : routes[Object.keys(routes)[0]];

    return <Component changeRoute={changeRoute} />;
  }
}

export default connect(
  ({ router: { current } }) => ({ current }),
  { changeRoute }
)(Router);
