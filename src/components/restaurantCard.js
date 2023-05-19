import {img_src} from "./constants";


const RestaurentCard =({name ,cuisines,avgRating,cloudinaryImageId})=>{
    console.log('these are props',cloudinaryImageId);
    return(
        <div className="card">

        <img src={img_src+cloudinaryImageId}  />
        <h2>{name}</h2>
        <h3>{cuisines.join(" , ")}</h3> 
        <h4>{avgRating}</h4>
        </div>
    )
}
export default RestaurentCard;