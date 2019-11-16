import React, { Component } from "react";
import { Route as ReactRouterRoute, Redirect } from "react-router-dom";

class Route extends Component {
  static getDerivedStateFromProps(nextProps) {
    const { title } = nextProps;
    document.title = title ? `IMGUR` : document.title;

    return null;
  }

  render() {
    const {
      title,
      condition = true,
      redirect = "/",
      path,
      ...rest
    } = this.props;

    if (condition) {
      return <ReactRouterRoute {...rest} />;
    }

    return <Redirect from={path} to={redirect} />;
  }
}

export default Route;
