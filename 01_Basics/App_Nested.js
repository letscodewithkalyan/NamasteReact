
// <div id="parent">
//     <div id="child">
//         <h1>I am h1 tag</h1>
//         <h2>I am h2 tag</h2>
//     </div>
//     <div id="child2">
//         <h1>I am h1 tag</h1>
//         <h2>I am h2 tag</h2>
//     </div>
// </div>


const reactElement = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
        [   React.createElement("h1",{id:"different"},"I am h1 tag"),
            React.createElement("h2",{},"i am h2 tag")
        ]
    ),
    React.createElement("div",{id:"child2"},
        [   React.createElement("h1",{},"I am h1 tag"),
            React.createElement("h2",{},"i am h2 tag")
        ]
    )
]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(reactElement);