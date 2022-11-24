import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';



const FirstSliderItem = (props) => {
    return (
        <a href="#" className='slider_box'>
            <div className='slider_image'>
                <img src={props.image} />
                <h6 className="slider_text">{props.title}</h6>
            </div>
        </a>
    )
}

export default FirstSliderItem;
