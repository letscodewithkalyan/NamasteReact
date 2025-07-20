import { useEffect, useState } from "react"

const Home = () =>{
    const [listOfRestaurents, setListOfRestaurents] = useState([]);
    const [filteredRestaurents, setFilteredRestaurents] = useState([]);
    const [searchText, setSearchText] = useState("");

    const fetchRestarurents = async()=>{
        try{
            const proxyUrl = "https://cors-anywhere.herokuapp.com/";
            const swiggyUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";
            const apiUrl = "https://swiggy-api-4c740.web.app/swiggy-api.json";

            const response = await fetch(apiUrl);
            const json = await response.json();
            setListOfRestaurents(json?.data?.cards[2]?.data?.data?.cards);
            setFilteredRestaurents(json?.data?.cards[2]?.data?.data?.cards);
        }
        catch(err){
            console.log(err);
        }
    }

    const onSearchButtonClick = () =>{
        setFilteredRestaurents(listOfRestaurents.filter(l => l.data.name.toLowerCase().contains(searchText)));
    }

    useEffect(()=>{
      fetchRestarurents();
    },[])

    return(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
                    <button onClick={onSearchButtonClick}>Search</button>
                </div>
            </div>
            <div className="restaurents">
                {filteredRestaurents.map(l => {
                    <h1>l.data.name</h1>
                })}
            </div>
        </div>
    )
}

export default Home