const reactElement = React.createElement("h1",{id:"heading", xyz: "abc"},"Hello world React app.js");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reactElement);