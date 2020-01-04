import React from "react";

//and for VALIDATING the prop DATA you need the following:
import PropTypes from "prop-types";

//if the component doesn't do anything, just has a render component, u can use this kind of component definition:
//this is a Stateless functional Component
// there is no .this in this, only the props should be used as an argument of the function
//we use curly brackets to reference the variables we used in props
function Header(props) {
  //or u can use an arrow function definition for it, if u like (uncomment for syntax):
  //in case of arrow function the {return...} can be deleted as well, this way an implicit return will be used
  //const Header = props => {
  return (
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
        Day
      </h1>
      <h3 className="tagline">
        <span>{props.tagline}</span>
      </h3>
    </header>
  );
}

//and here we define the different prop's types (in a propTypes object), and if they required or not
//failing any of these, will result a RED warning in console.log
//...and it's only a development helper, won't yell us in production...:-)
Header.propTypes = {
  tagline: PropTypes.string.isRequired
};

//and this is the full-blown version of a React component definition (uncomment is to see the syntax
//this. = the particular component instance (Header), props = an object which contains all of the final properties
/*
class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day
        </h1>
        <h3 className="tagline">
          <span>{this.props.tagline}</span>
        </h3>
      </header>
    );
  }
}
*/

export default Header;
