// React Component, React Element
// Composing React Element, React Component one inside another
// React Component starts with Caps letter where as React element starts with small letter
import React from "react";
import { createRoot } from "react-dom/client";

const reactElement = <h1>Complete Namaste React Kalyan </h1>
//For multiple lines
const reactElement_2 = (
    <div id="header">
        <h1>Complete Namaste React Kalyan </h1>
    </div>
);


//React component is a function that returns React Component
const ReactComponent = () => <h1>Complete Namaste React Kalyan </h1>

//for multiple lines
const ReactComponent_2 = () => (
    <div id="header">
        <h1>Complete Namaste React Kalyan </h1>
    </div>
)

//For curly braces we need to explicit
const ReactComponent_3 = () => {
    return <h1>Complete Namaste React Kalyan </h1>
}

const ReactComponent_4 = () => {
    return (
        <div id="header">
            <h1>Complete Namaste React Kalyan </h1>
        </div>
    );
}

//Component composistion
//Composing two or more elements into one another
const ReactComposeComponent_5 = () => (
    <div id="header">
        <ReactComponent_4/>
        <h2>Complete Namastete React Kalyan</h2>
    </div>

)

//Rendering element and component into Root element
var root = createRoot(document.getElementById("root"));
//root.render(reactElement) //Rendering element
//root.render(<ReactComponent_4/>) //Rendering React component

//react element inside react element
const element_1 = <h1>Complete Namaste React</h1>

//element inside element
const element_2 = (
    <div id="header1">
        {element_1}
        <h1>Complete Namaste React</h1>
    </div>
);

//element inside component
const Component_1 = () => (
    <div id="componentheader">
        {element_2}
        <h1>Complete Namaste React</h1>
    </div>
);

//component inside element
const element_3 = (
    <div id="header2">
        <Component_1/>
        <h1>Complete Namaste React2</h1>
    </div>
)

//We can call componenet inside element
const element_4 = (
    <div id="header4">
        {Component_1()}
        <h1>Complete Namaste React</h1>
    </div>
)
root.render(element_4);