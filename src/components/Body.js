import Restaurant from "./restaurant";
import { useState } from "react";
import resData from "../utils/mockData";

function filterData (searchtext,restarent){
    const filterdata=restarent.filter((restaurant)=>
    restaurant.data.name.includes(searchtext)
    );
    return filterdata;
}

const Body =()=>{
const [ListOfRestaurant, setListOfRestaurants]= useState(resData);
const [searchtext,setSearchtext] = useState("");
const [restarent,setRestarent] = useState(resData);

// console.log(ListOfRestaurants);
  return(
    <>
        <div className="search-icon">
        <input type="text" className="search-input" placeholder="search..."  value={searchtext}
        onChange={(e)=>setSearchtext(e.target.value)} />
  <button onClick={()=>{ 
            const resData= filterData(searchtext,restarent);
          setRestarent(resData);
        }}>search</button>
                    <button className="filter-btn" 
                onClick={()=>{
                const filteredList = ListOfRestaurant.filter(
                        (res)=>res.data.avgRating >= 4.0);
                       // console.log(ListOfRestaurants);
                   setListOfRestaurants(filteredList);
                }}>filter top rated restaurants</button>
            <div className="res-container">
            {ListOfRestaurant.map((restaurant)=>(
            <Restaurant {...restaurant.data}  key={restaurant.data.name}/>
            ) ) }
            </div>   
            </div>     
        </>
    )};
export default Body;