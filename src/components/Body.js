
import Restaurant from "./restaurant";
import { useState } from "react";
import resData from "../utils/mockData";

const Body =()=>{
const [ListOfRestaurants, setListOfRestaurants]= useState(resData);

//console.log(ListOfRestaurants);
  return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{
                const filteredList = ListOfRestaurants.filter(
                        (res)=>res.data.avgRating >= 3.5);
                       // console.log(ListOfRestaurants);
                   setListOfRestaurants(filteredList);
                }}
                >
                    Top Rated Restaurants 
                </button>
            </div>
            <div className="res-container">
            {ListOfRestaurants.map((restaurant)=>(
            <Restaurant key={restaurant.data.id} resData={restaurant}/>
            ) ) }
            </div>
        </div>
    )};


export default Body;