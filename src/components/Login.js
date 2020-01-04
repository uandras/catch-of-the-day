//AUTHENTICATION:
//facebook auth.:
//   TURN ON "Embedded Browser OAuth Login"
//   COPY the auth handler URI from firebase facebook authentication to the "Valid OAuth Redirect URIs"

import React from "react";

import PropTypes from "prop-types";

//BEWARE: stateless component, doesn't have a "this" property, so:
//instead of "this.props.xxx", "props.xxx" should be used
const Login = props => (
  <nav className="login">
    <h2>Inventory login</h2>
    <p>Sign in to manage your store's inventory:</p>
    <button className="github" onClick={() => props.authenticate("Github")}>
      Log In with GitHub
    </button>
    <button className="facebook" onClick={() => props.authenticate("Facebook")}>
      Log In with FaceBook
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;
