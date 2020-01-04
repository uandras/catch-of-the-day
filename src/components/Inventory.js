import React from "react";
import firebase from "firebase";

import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";
import base, { firebaseApp } from "../base";

//and we populate the addFish props (which comes from App) down to AddFishForm
//index is needed to access the key in the EditFishForm
class Inventory extends React.Component {
  state = {
    owner: null,
    uid: null
  };

  //in order to check the login state after a refresh page, we need to do the following:
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async authData => {
    //1. look up the current store in the firebase db
    const store = await base.fetch(this.props.storeId, { context: this }); //await needed in order to get the store name back, not the promise (without await, only the promise is returned
    console.log(store);
    //2. claim it if there is no owner (if we are the first person to login this particular store, likely we are the owners)
    if (!store.owner) {
      //save it as our own
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
    }
    //3. set tthe state of the inventory component to reflect the current user
    //NOTE: this will be a local state for this <Inventory> component
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
    console.log(authData);
  };

  authenticate = loginType => {
    let authProvider;
    switch (loginType) {
      case "Facebook":
        authProvider = new firebase.auth.FacebookAuthProvider();
        break;
      case "Github":
        authProvider = new firebase.auth.GithubAuthProvider();
        break;
    }
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  //logout function also should be an async function, because of firebase logout
  logout = async () => {
    console.log("Logging out!");
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };

  //NOTE: function exits after "return", that's why we don't need  the "else" after the "if"
  render() {
    //first of all, we will need a logout button:
    const logout = <button onClick={this.logout}>Log Out!</button>;
    //1. check if they are logged in...
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }
    //2. ...and check if they are NOT the owner of this store...
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry, but you are not the owner!</p>
          {logout}
        </div>
      );
    }
    //3. they must be the owners, so let's render the true inventory
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {logout}
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            key={key}
            index={key}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
            fish={this.props.fishes[key]}
          />
        ))}
        <AddFishForm addFish={this.props.addFish}></AddFishForm>
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
