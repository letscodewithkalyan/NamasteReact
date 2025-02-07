import React from "react"
import {createRoot} from "react-dom/client"

// Food app
// Header, Body, Footer

const header = <h1>Complete Namaste React</h1>

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(header);