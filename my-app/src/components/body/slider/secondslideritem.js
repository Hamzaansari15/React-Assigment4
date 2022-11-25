import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';



/* https://resources.turo.com/f/81934/416x284/6e085cbe0e/image_outdoors_416x285.jpg 
       https://resources.turo.com/f/81934/416x284/7c424a07d5/image_unwind_416x285.jpg
       https://resources.turo.com/f/81934/416x284/929b21c4fa/image_upgrade_416x285.jpg
       https://resources.turo.com/f/81934/416x284/1e828ae782/image_scenic_416x285.jpg
       https://resources.turo.com/f/81934/416x284/a3870434ac/image_try_416x285.jpg
       https://resources.turo.com/f/81934/416x284/fa43ee8e2b/image_errand_416x285.jpg
  
    */

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className="main_slider2">
                    <div className="slider2">
                        <div className="slider_image2">
                            <img
                                className="d-block"
                                src=" https://resources.turo.com/f/81934/416x284/6e085cbe0e/image_outdoors_416x285.jpg "
                                alt="First slide" />
                        </div>
                        <div className="slider_caption">
                            <h1 className="slider_heading2">Find the perfect car
                                <span> to conquer the great outdoors</span>
                            </h1>
                            <p className="slider_text2">Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
                        </div>
                    </div>
                </div>
            {/* </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;