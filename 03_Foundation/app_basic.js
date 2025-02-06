import React from "react"
import {createRoot} from "react-dom/client"

// React.CreateElement => ReactElement.JS Object => HTMLElement(render)
//Creating react element using the core react
const reactElement = React.createElement("h1",{id:"heading"},"Namaste React from Core React")

//JSX is HTML or XML like syntax,
//But not HTML inside JAVASCRIPT
//JSX is different React is different
//JSX code is transpilled before it's going to the JSEngine - Parcel is doing the JOB by using Babel
//JSX => Babel transpiles to React.CreateElement => ReactElement.Js Object => HTMLElement(render)
const jsxElement = (<h1 id="heading" tabIndex="test">Namaste React from JSX </h1>)



console.log(reactElement);
//Babel converting JSX to React.createElement() //https://babeljs.io/
console.log(jsxElement);

const rootElement = createRoot(document.getElementById("root"));

rootElement.render(jsxElement);