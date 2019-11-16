import React from "react";
import { connect } from "react-redux";
import Content from "./Content";

const App = props => {
  return <Content />;
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, null)(App);
