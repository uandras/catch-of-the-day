//AUTHENTICATION:
//facebook auth.:
//   TURN ON "Embedded Browser OAuth Login"
//   COPY the auth handler URI from firebase facebook authentication to the "Valid OAuth Redirect URIs"

//App.js is the "mother" of all components

import React from "react";

import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";
import base from "../base";

//see the props (dynamic attributes - object of data that is passed to the component) usage in Header
//if you want to pass anything other than strings, curly bracket {} has to be used

//React STATE:
//is an object that lives inside a component, that holds all of the data that component (and maybe some of its children) needs.
//State is a "single source of truth" - update only the data in the state object (and not the DOM), and let React take it
//EVERY CUSTOM FUNCTION THAT ACCESS STATE, HAS TO IVE IN THE SAME COMPONENT AS THE STATE.

//Local Storage: to preserve the order state in local directory: kind of like cookies, but easier to handle (basically key-value pairs)

class App extends React.Component {
  //LIFECYCLE METHODS (lifecycle hooks) in React:
  //tells us when certain things are happening
  //details: https://reactjs.org/docs/react-component.html

  //componentDidMount: fires at the very first possible second after when the component is loaded onto the page
  //here will the firebase database updated
  componentDidMount() {
    //1.Re-instate the local storage
    const localStorageRef = localStorage.getItem(
      this.props.match.params.storeId
    );
    console.log("localstorageRef: ", localStorageRef);
    console.log("typeof localstorageRef: ", typeof localStorageRef);
    //JSON.parse makes an object from a string
    this.setState({ order: JSON.parse(localStorageRef) });
    //ref in Firebase references to a piece of data
    //string info comes from App's props (match/params/:
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  //here will be the Order state loaded to the localstorage
  componentDidUpdate(prevProps, prevState, snapshot) {
    //JSON.stringify is needed to convert the object to string
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  //and here we will cleanup the database (remove not necessary instances) after App component is not visible anymore:
  componentWillUnmount() {
    base.remove(this.ref);
  }

  //and App class will be the place where we create the STATEs (because it is the parent class of all the classes that use state):
  //1. First an empty STATE should be created
  //members of the state can be any type of data (not only objects), which suits best for that member
  state = {
    fishes: {},
    order: {}
  };
  //2. Then we need an attribute with an arrow function to change the state, because the state object is not accessible from other components
  addFish = fish => {
    console.log("Adding a fish!");
    //in order to update a state we MUST use React's set state API:
    //11.We must take a copy of the existing state
    const fishes = { ...this.state.fishes }; //... is called an "object spread", it makes a copy of the object
    //12. add our new fish to that fishes variable with a unique datestamp id (in order to distinguish between them)
    fishes[`fish${Date.now()}`] = fish;
    //13. Set this new fishes object into the state
    this.setState({
      fishes: fishes
    });
  };

  updateFish = (key, updatedFish) => {
    //1. take a copy of the current state
    const fishes = { ...this.state.fishes };
    //2. update that state
    fishes[key] = updatedFish;
    //3. set that to state
    this.setState({ fishes: fishes });
  };
  //this one also has to pass down to Inventory.js, then to EditFishForm.js

  deleteFish = key => {
    //1. take a copy of the current state
    const fishes = { ...this.state.fishes };
    //2. update the state (because of firebase it has to be null)
    fishes[key] = null;
    //3. update the state
    this.setState({ fishes: fishes });
  };

  loadSampleFishes = () => {
    console.log("Loading sample fishes!!!");
    this.setState({ fishes: sampleFishes });
  };

  //3. and this arrow function attribute will be populated via props
  addToOrder = key => {
    //1. take a copy of state
    const order = { ...this.state.order };
    //2. either add to the order or update the order (note the || symbol, to spare some lines
    order[key] = order[key] + 1 || 1;
    //3. call setState to update state
    this.setState({ order: order });
  };

  removeFromOrder = key => {
    const order = { ...this.state.order };
    order[key] = order[key] - 1;
    if (order[key] === 0) delete order[key];
    this.setState({ order: order });
  };

  render() {
    //Object.keys make an array from the object elements, in order to be able to iterate through them
    //NOTE: "key" property in <p> tags needed by React, must be unique for every element
    //NOTE: "index" property is same as "key", and needed to access the key values (the "key" property itself is not accessible by default
    //NOTE: the object spread in props for "Order": it can be used, if we want to pass the whole state object, this is the easiest way to do it, and it will be spread to it's parts
    //NOTE: storeId for <Inventory> comes from react-router (you can check in dev tools, at App component
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" age={500} cool={true}></Header>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              ></Fish>
            ))}
          </ul>
        </div>
        <Order {...this.state} removeFromOrder={this.removeFromOrder}></Order>
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
          storeId={this.props.match.params.storeId}
        ></Inventory>
      </div>
    );
  }
}

export default App;
