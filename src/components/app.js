import React from "react"
import ReactDOM,{createRoot} from 'react-dom/client';
import { restaueant_list, img_src } from "./constants";
import HeadingComponet from "./header";
import RestaurentCard from "./restaurantCard";
import Body from "./body";


const AppLayout =()=>{
    return(
        <React.Fragment>
            <HeadingComponet/>
            <Body/>
            <Footer/>

        </React.Fragment>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>);