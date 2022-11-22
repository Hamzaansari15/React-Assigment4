import Slider from "react-slick";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';
import SliderItem from "./sliderItem";


export default class SwipeToSlide extends Component {
    render() {
        const settings = {
            className: "center",
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 5,
            swipeToSlide: true,

        };
        const imageArr = [
            'https://resources.turo.com/f/81934/386x308/9bf274f19e/image_make_jeep-2x.jpg',
            'https://resources.turo.com/f/81934/386x308/7dcf9bff19/image_make_tesla-2x.jpg',
            'https://resources.turo.com/f/81934/386x308/ef857a4438/image_make_subaru-2x.jpg',
            'https://resources.turo.com/f/81934/386x308/7e7ce60797/image_make_porsche-2x.jpg',
            'https://resources.turo.com/f/81934/386x308/0c4f5f5186/image_make_bmw-2x.jpg',
            'https://resources.turo.com/f/81934/386x308/065308f2c4/image_make_mb-2x.jpg',
            'https://resources.turo.com/f/81934/386x308/2809ca8702/image_make_toyota-2x.jpg',
            'https://resources.turo.com/f/81934/386x308/994b145776/image_make_nissan-2x.jpg',
            'https://resources.turo.com/f/81934/386x308/a470b4f290/image_make_lambo-2x.jpg',
            'https://resources.turo.com/f/81934/386x308/0431f873ac/image_make_ford-2x.jpg'
        ]
        const titleArr = [
            'Jeep',
            'Tesla',
            'Subaru',
            'Porsche',
            'BMW',
            'Mercedez-Benz',
            'Toyota',
            'Nissan',
            'Lamborghini',
            'Ford'
        ]
        return (
            <div className="main_slider">
                <div className="slider" >
                    <h2 id="slider_heading">Browse by make</h2>
                    <Slider {...settings}>
                        {/* <a href="#" className='slider_box'>
                            <div className='slider_image'>
                                <img src="https://resources.turo.com/f/81934/386x308/9bf274f19e/image_make_jeep-2x.jpg" />
                                <div className="slider_text">Mercedez-Benz</div>
                            </div>

                        </a>
                        <a href='#' className='slider_box'>
                            <div className='slider_image'>
                                <img src="https://resources.turo.com/f/81934/386x308/7dcf9bff19/image_make_tesla-2x.jpg"/>
                                <div className="slider_text">Mercedez-Benz</div>
                            </div>
                        </a>
                        <a href='#' className='slider_box'>
                            <div className='slider_image'>
                                <img src="	https://resources.turo.com/f/81934/386x308/ef857a4438/image_make_subaru-2x.jpg"/>
                                <div className="slider_text">Mercedez-Benz</div>
                            </div>
                        </a>
                        <a href='#' className='slider_box'>
                            <div className='slider_image'>
                                <img src="https://resources.turo.com/f/81934/386x308/7e7ce60797/image_make_porsche-2x.jpg"/>
                                <div className="slider_text">Mercedez-Benz</div>
                            </div>
                        </a>
                        <a href='#' className='slider_box'>
                            <div className='slider_image'>
                                <img src="https://resources.turo.com/f/81934/386x308/0c4f5f5186/image_make_bmw-2x.jpg"/>
                                <div className="slider_text">Mercedez-Benz</div>
                            </div>
                        </a>
                        <a href='#' className='slider_box'>
                            <div className='slider_image'>
                                <img src="	https://resources.turo.com/f/81934/386x308/065308f2c4/image_make_mb-2x.jpg"/>
                                <div className="slider_text">Mercedez-Benz</div>
                            </div>
                        </a>
                        <a href='#' className='slider_box'>
                            <div className='slider_image'>
                                <img src="	https://resources.turo.com/f/81934/386x308/2809ca8702/image_make_toyota-2x.jpg"/>
                                <div className="slider_text">Mercedez-Benz</div>
                            </div>
                        </a>
                        <a href='#' className='slider_box'>
                            <div className='slider_image'>
                                <img src="	https://resources.turo.com/f/81934/386x308/994b145776/image_make_nissan-2x.jpg"/>
                                <div className="slider_text">Mercedez-Benz</div>
                            </div>
                        </a>
                        <a href='#' className='slider_box'>
                            <div className='slider_image'>
                                <img src="https://resources.turo.com/f/81934/386x308/a470b4f290/image_make_lambo-2x.jpg"/>
                                <div className="slider_text">Mercedez-Benz</div>
                            </div>
                        </a>
                        <a href='#' className='slider_box'>
                            <div className='slider_image'>
                                <img src="https://resources.turo.com/f/81934/386x308/0431f873ac/image_make_ford-2x.jpg"/>
                                <div className="slider_text">Mercedez-Benz</div>
                            </div>
                        </a> */}
                        <SliderItem image={imageArr[0]} title={titleArr[0]} />
                        <SliderItem image={imageArr[1]} title={titleArr[1]}/>
                        <SliderItem image={imageArr[2]} title={titleArr[2]}/>
                        <SliderItem image={imageArr[3]} title={titleArr[3]}/>
                        <SliderItem image={imageArr[4]} title={titleArr[4]}/>
                        <SliderItem image={imageArr[5]} title={titleArr[5]}/>
                        <SliderItem image={imageArr[6]} title={titleArr[6]}/>
                        <SliderItem image={imageArr[7]} title={titleArr[7]}/>
                        <SliderItem image={imageArr[8]} title={titleArr[8]}/>
                        <SliderItem image={imageArr[9]} title={titleArr[9]}/>

                    </Slider>
                </div>
            </div>
        );
    }
}