import React from "react";

import { getFunName } from "../helpers";

//adjacent elements must be wrapped into a JSX Fragment (in this case it is not necessary, because there is only a single form element outside (but I left it here on purpose)
//javascript code must be placed between: { here comes the javascript code }

//React events: used almost same as in Javascript, the difference is that React events are done inline... see the onXxxxx event handlers in the below code
//React events: note, that there is no function calling in onXxxxx event handlers, functions are referenced there without (), in order not to run at the time of page load, only when the event occurs
class StorePicker extends React.Component {
  //makeing the refs:
  myInput = React.createRef();

  //own-created methods are not bound by default to React.Component, that's why "this" is not available here
  //so we have to bind our methods also to the mother component
  //solution: instead of methods, use the arrow function syntax, so this way gotoStore will be a property, with access to "this"
  goToStore = event => {
    //1. stop the form from submitting (reloading)
    event.preventDefault(); //that's why the page is not reloading at every submit (page is handled locally, not server side, so no need to reload)
    //2. get the text from that input ******(USE ref: reference a DOM note on a html page)******
    //don't do the following (commented out line), because as a rule of thumb in React: don't touch the DOM in React
    //const storeName = document.getElementById("input1").getAttribute("value");
    const storeName = this.myInput.current.value; //"this" is working here, because using arrow function, goToStore now is a property, not a method
    //3.change to page /store/whatever-they-enter
    //NOTE: we don't want to refresh the page with a "push" STATE
    //with "push" state we are allowed to change the URL without refreshing the page or losing anything from the memory
    //we do it with react-router, which is accessible here, because Storepicker is a child of router
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <React.Fragment>
        <form action="" className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter a Store!</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store&rarr;</button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
