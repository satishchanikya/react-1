import React, { createElement } from "react";
  
import ReactDOM from "react-dom/client";

/*const parent =React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child1"},[
    React.createElement("h1",{},"welcome to react "),
    React.createElement("h2",{},"learn reacts")]
    ),
    React.createElement("div",{id:"child2"},
     [React.createElement("h1",{},"I'm h1 tag"),
    React.createElement("h2",{},"I'm h2 tag")])
);
// React element is object.
const heading =React.createElement(
    "h1",
    {id : "heading",xyz : "uvw"},
    "hello World From React!");

console.log(parent);    

    const root =ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);*/

/*const heading=React.createElement(
    "h1",
    {id : "heading"},
     "namaste react"
    )  ;
console.log(heading);*/
//jsx -> like html 
const elem=<span>react using element in component </span>;
const jsxheading = () => <h1 id="heading">
    namaste react using JSX2
    </h1>
    ;
console.log(jsxheading);
//injection attacks -> milicious data will inject into your code.
//const data = api.getData();

//react functional component
const HeadingComponent = () =>
    <div id ="container">
      <jsxheading/>
      <jsxheading> </jsxheading>
        <h1 className="heading">namaste react functional component</h1>
    </div>

const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<HeadingComponent/>);
