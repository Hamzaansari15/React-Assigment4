import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';
import Slider from "react-slick";

const SecondSliderItem = () => {
    const settings = {
        dots: false,
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="main_slider2">
                <div className="slider2">
                    <Slider {...settings}>
                        <div>
                            <div id="slider2" className="slider_section">
                                <div className="slider_image2">
                                    <img src="https://resources.turo.com/f/81934/416x284/6e085cbe0e/image_outdoors_416x285.jpg" />
                                </div>
                                <div className="slider_box2">
                                    <div className="slider_heading2">Find the perfect car
                                        <span> to the great outdoors</span>
                                    </div>
                                    <div className="slider_text2">Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</div>
                                    <button className="button">Browse cars</button>                                
                                    </div>
                            </div>
                        </div>
                        <div>
                            <div id="slider2" className="slider_section">
                                <div className='slider_image2'>
                                    <img src='https://resources.turo.com/f/81934/416x284/7c424a07d5/image_unwind_416x285.jpg' />
                                </div>
                                <div className="slider_box2">
                                    <div className="slider_heading2">Find the perfect car
                                        <span> to unwind for the weekend</span>
                                    </div>
                                    <div className="slider_text2">From daily drivers to spirited sports cars, ditch the grind with convenient nearby cars.</div>
                                    <button className="button">Browse cars</button>                                </div>
                            </div>
                        </div>
                        <div>
                            <div id="slider2" className="slider_section">
                                <div className='slider_image2'>
                                    <img src='https://resources.turo.com/f/81934/416x284/929b21c4fa/image_upgrade_416x285.jpg' />
                                </div>
                                <div className="slider_box2">
                                    <div className="slider_heading2">Find the perfect car
                                        <span> to your vacation plans</span>
                                    </div>
                                    <div className="slider_text2">Skip the rental car counter and find the perfect car to complement your vacation vibe.</div>
                                    <button className="button">Browse cars</button>                                </div>
                            </div>
                        </div>
                        <div>
                            <div id="slider2" className="slider_section">
                                <div className='slider_image2'>
                                    <img src='https://resources.turo.com/f/81934/416x284/1e828ae782/image_scenic_416x285.jpg' />
                                </div>
                                <div className="slider_box2">
                                    <div className="slider_heading2">Find the perfect car
                                        <span> for scenic corners & curves</span>
                                    </div>
                                    <div className="slider_text2">Get your fill of high-performance thrills, with the richest selection of luxury and exotic vehicles anywhere</div>
                                    <button className="button">Browse cars</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div id="slider2" className="slider_section">
                                <div className='slider_image2'>
                                    <img src='https://resources.turo.com/f/81934/416x284/a3870434ac/image_try_416x285.jpg' />
                                </div>
                                <div className="slider_box2">
                                    <div className="slider_heading2">Find the perfect car
                                        <span> to try before you buy</span>
                                    </div>
                                    <div className="slider_text2">Make sure your future wheels work well with your lifestyle by taking your time in the driver’s seat.</div>
                                    <button className="button">Browse cars</button>                                </div>
                            </div>
                        </div>
                        <div>
                            <div id="slider2" className="slider_section">
                                <div className='slider_image2'>
                                    <img src='https://resources.turo.com/f/81934/416x284/fa43ee8e2b/image_errand_416x285.jpg' />
                                </div>
                                <div className="slider_box2">
                                    <div className="slider_heading2">Find the perfect car
                                        <span> to make errand day easier</span>
                                    </div>
                                    <div className="slider_text2">Book a roomy truck or SUV to ease your errand day stress, or to motivate your moving day.</div>
                                    <button className="button">Browse cars</button>                                </div>
                            </div>
                        </div>
                    </Slider></div>
            </div>
        </>
    )
}
export default SecondSliderItem;