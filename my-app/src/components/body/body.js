import {Heading, SecondHeading, ImageSection} from "./heading/heading";
import {FirstSlider, SecondSlider, ThirdSlider, FourthSlider} from "./slider/slider";

const Body = () => {
 
    let headingArr = ['Find your drive'];
    let smallHeadingArr = ["Explore the world's largest car sharing marketplace"]
 
    return(
        <div>
            <Heading heading={headingArr[0]} smallHeading={smallHeadingArr[0]} />
            <FirstSlider/> 
            <SecondSlider/>
            <ThirdSlider/>
            <SecondHeading/>
            <ImageSection/>
            <FourthSlider/>
        </div>
    )
}
export default Body;