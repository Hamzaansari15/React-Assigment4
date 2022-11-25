import Heading from "./heading/heading";
import {SwipeToSlide, SecondSlider} from "./slider/slider";

const Body = () => {
    return(
        <div>
            <Heading/>
            <SwipeToSlide/> 
            <SecondSlider/>
        </div>
    )
}
export default Body;