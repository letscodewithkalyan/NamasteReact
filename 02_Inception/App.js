import React from "react";
import {createRoot} from "react-dom/client";

const element = React.createElement("div",{id:"header"},[
    React.createElement("div",{id:"subHeader"},[
        React.createElement("h1",{},"Kalyan Pidugu h1"),
        React.createElement("h2",{},"Kalyan Pidugu h2")
    ]),
    React.createElement("div",{id:"subHeader2"},[
        React.createElement("h1",{},"Kalyan Pidugu h1"),
        React.createElement("h2",{},"Kalyan Pidugu h2")
    ]),
])

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(element);