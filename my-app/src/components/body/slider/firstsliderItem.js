import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';
import Slider from "react-slick";



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
const SecondSliderItem = () => {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      };
      return(
        <div>
        <h2> Lazy Load</h2>
        <Slider {...settings}>
          <div>
            
            <img id="image" src="https://resources.turo.com/f/81934/416x284/1e828ae782/image_scenic_416x285.jpg" />
          </div>
          <div>
            <img />
          </div>
          <div>
            <img  />
          </div>
          <div>
            <img  />
          </div>
        </Slider>
      </div>

      )
}

export default FirstSliderItem;
