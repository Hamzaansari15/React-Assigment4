import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';


const SliderItem = (props) => {
    return(
        <a href="#" className='slider_box'>
                            <div className='slider_image'>
                                <img src={props.image} />
                                <div className="slider_text">{props.title}</div>
                            </div>

                        </a>
    )
}
export default SliderItem;