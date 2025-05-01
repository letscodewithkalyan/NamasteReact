import React from "react"
import {createRoot} from "react-dom/client"

// Food app
// Header - Logo and Nav Items
// Body - Search, Restaurent container 
//                      -- Restaurant card -- 
// Footer - links, address, contact

const Header = () => { 
    return (
    <div className="header">
        <div className="logo-container">
            <img
                className="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"
            />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>)
}

const RestarantCard = (props) => { 
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1662126147/czvdrfidfdzlnb0sy21a.webp"/>
            <h3>Meghana Foods</h3>
            <h4>Indian</h4>
            <h4>4 stars</h4>
        </div>
    )
}
const Body = () => { 
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestarantCard/>
            </div>
        </div>
    );
}
const Footer = () => { return <div>footer</div> }



const AppLayout = () =>{
    return (
     <div className="app">
        <Header/>
        <Body />
        <Footer />
    </div>
    )
}
const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<AppLayout/>);