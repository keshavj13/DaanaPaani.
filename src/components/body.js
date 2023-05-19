import {img_src,restaueant_list} from "./constants";
import RestaurentCard from "./restaurantCard";



const Body=()=>{
    return(
        <div className="Restaueant-card">
        {
          restaueant_list.map((restaurantUnique) => {
                return <RestaurentCard {...restaurantUnique.data} key={restaurantUnique.data.id}/>
            }
            )
        }
        </div>

    )

}

export default Body;