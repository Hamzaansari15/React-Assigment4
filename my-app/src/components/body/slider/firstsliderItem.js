import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';
import { useRef } from "react";



const FirstSliderItem = (props) => {
   
    return (
       <div className="center">
         <a className='slider_box'>
            <div className='slider_image'>
                <img src={props.image} />
                <h6 className="slider_text">{props.title}</h6>
            </div>
        </a>
       </div>
    )
}

export default FirstSliderItem;
