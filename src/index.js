import React from "react";
import { render } from "react-dom";

//CSS file import comes here:
import "./css/style.css";

//own component imports come here:
import App from "./components/App";
import StorePicker from "./components/StorePicker";
import Router from "./components/Router";

//every single component will be its own class
//and every single class needs at least 1 single method called "render" - which will contain what is rendered on the page

//we touch the DOM only when we mount the entire application to the page (no other direct DOM manipulation in React)
//react-dom does all the DOM-rendering stuff into index.html's <div id="main">...</div>
//the created React classes can be used as HTML tags in render()
//BEST PRACTICE: store all of our components in it's own files, in /src/components folder

//render(<p>HEYYYYYY</p>, document.querySelector("#main"));
//render(<App />, document.querySelector("#main"));
render(<Router />, document.querySelector("#main"));
