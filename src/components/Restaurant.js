import {CDN_URL} from '../utils/constant';

const Restaurant=({
    cloudinaryImageId,
    name,
    cuisine,
    avgRating,
    costForTwo,
    delivaryTime,
})=>{
    // const {resData}=props;{
    // const=resData?.data;
    return(
        <div className="res-card">
            
            <img className="res-img" 
            src ={CDN_URL +
            cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h5>{avgRating}Star</h5>
            <h5>{costForTwo/100}</h5>
            <h5>{"₹200 FOR TWO"}</h5>
            <h5>{delivaryTime}minutes</h5>
        </div>
    )
};
export default Restaurant;