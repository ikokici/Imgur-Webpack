import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Route, Link, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import { Page } from "shared-components";

const Home = Loadable({
  loader: () => import("../../feature-gallery/view"),
  loading: () => <div />
});

const App = props => {
  let condition = false;
  return (
    <Fragment>
      <Switch>
        <Page.Route
          title="Home"
          condition={!condition}
          path="/"
          redirect="/home"
          component={Home}
        />
      </Switch>
    </Fragment>
  );
};
const mapStateToProps = state => {
  return {
    //response: state.core.response
  };
};

export default connect(mapStateToProps, null)(App);
