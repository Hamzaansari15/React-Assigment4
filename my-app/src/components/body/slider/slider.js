import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import FirstSliderItem from "./firstsliderItem";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";


const SwipeToSlide = () => {

    const settings = {
        rows: 1,
        speed: 300,
        slidesPerRow: 1,
        slidesToShow: 5,
        infinite: true,
        swipeToSlide: true,
        slidesToScroll: 1,
        lazyLoad: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
        ]

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
        <>
            <div className="main_slider">
                <div className="slider" >
                    <h2 id="slider_heading">Browse by make</h2>
                    <Slider {...settings}>

                        <FirstSliderItem image={imageArr[0]} title={titleArr[0]} />
                        <FirstSliderItem image={imageArr[1]} title={titleArr[1]} />
                        <FirstSliderItem image={imageArr[2]} title={titleArr[2]} />
                        <FirstSliderItem image={imageArr[3]} title={titleArr[3]} />
                        <FirstSliderItem image={imageArr[4]} title={titleArr[4]} />
                        <FirstSliderItem image={imageArr[5]} title={titleArr[5]} />
                        <FirstSliderItem image={imageArr[6]} title={titleArr[6]} />
                        <FirstSliderItem image={imageArr[7]} title={titleArr[7]} />
                        <FirstSliderItem image={imageArr[8]} title={titleArr[8]} />
                        <FirstSliderItem image={imageArr[9]} title={titleArr[9]} />

                    </Slider>
                </div>
            </div>
        </>
    );

}
const SecondSlider = () => {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={false}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="main_slider2 mx-5">
                        <div className="slider2">
                            <div className="slider_image2 mx-3 mb-3">
                                <img
                                    className="d-block"
                                    src=" https://resources.turo.com/f/81934/416x284/6e085cbe0e/image_outdoors_416x285.jpg "
                                    alt="First slide" />
                            </div>
                            <div className="slider_caption mx-3 mb-3">
                                <h2 className="slider_heading2">Find the perfect car
                                    <span> to conquer the great outdoors</span>
                                </h2>
                                <p className="slider_text2 mt-3">Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
                            <div className="mt-5"><button className="p-2 px-3 slider_btn">Browse car</button></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="main_slider2 mx-5">
                        <div className="slider2">
                            <div className="slider_image2 mx-3 mb-3">
                                <img
                                    className="d-block"
                                    src=" https://resources.turo.com/f/81934/416x284/7c424a07d5/image_unwind_416x285.jpg "
                                    alt="First slide" />
                            </div>
                            <div className="slider_caption mx-3 mb-3">
                                <h2 className="slider_heading2">Find the perfect car
                                    <span> to conquer the great outdoors</span>
                                </h2>
                                <p className="slider_text2 mt-3">Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
                            <div className="mt-5"><button className="p-2 px-3 slider_btn">Browse car</button></div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide><div className="main_slider2 mx-5">
                        <div className="slider2">
                            <div className="slider_image2 mx-3 mb-3">
                                <img
                                    className="d-block"
                                    src="https://resources.turo.com/f/81934/416x284/929b21c4fa/image_upgrade_416x285.jpg"
                                    alt="First slide" />
                            </div>
                            <div className="slider_caption mx-3 mb-3">
                                <h2 className="slider_heading2">Find the perfect car
                                    <span> to conquer the great outdoors</span>
                                </h2>
                                <p className="slider_text2 mt-3">Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
                            <div className="mt-5"><button className="p-2 px-3 slider_btn">Browse car</button></div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide><div className="main_slider2 mx-5">
                        <div className="slider2">
                            <div className="slider_image2 mx-3 mb-3">
                                <img
                                    className="d-block"
                                    src=" https://resources.turo.com/f/81934/416x284/1e828ae782/image_scenic_416x285.jpg "
                                    alt="First slide" />
                            </div>
                            <div className="slider_caption mx-3 mb-3">
                                <h2 className="slider_heading2">Find the perfect car
                                    <span> to conquer the great outdoors</span>
                                </h2>
                                <p className="slider_text2 mt-3">Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
                            <div className="mt-5"><button className="p-2 px-3 slider_btn">Browse car</button></div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide><div className="main_slider2 mx-5">
                        <div className="slider2">
                            <div className="slider_image2 mx-3 mb-3">
                                <img
                                    className="d-block"
                                    src="https://resources.turo.com/f/81934/416x284/a3870434ac/image_try_416x285.jpg "
                                    alt="First slide" />
                            </div>
                            <div className="slider_caption mx-3 mb-3">
                                <h2 className="slider_heading2">Find the perfect car
                                    <span> to conquer the great outdoors</span>
                                </h2>
                                <p className="slider_text2 mt-3">Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
                            <div className="mt-5"><button className="p-2 px-3 slider_btn">Browse car</button></div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide><div className="main_slider2 mx-5">
                        <div className="slider2">
                            <div className="slider_image2 mx-3 mb-3">
                                <img
                                    className="d-block"
                                    src=" https://resources.turo.com/f/81934/416x284/fa43ee8e2b/image_errand_416x285.jpg "
                                    alt="First slide" />
                            </div>
                            <div className="slider_caption mx-3 mb-3">
                                <h2 className="slider_heading2">Find the perfect car
                                    <span> to conquer the great outdoors</span>
                                </h2>
                                <p className="slider_text2 mt-3">Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
                            <div className="mt-5"><button className="p-2 px-3 slider_btn">Browse car</button></div>
                            </div>
                        </div>
                    </div></SwiperSlide>
            </Swiper>
        </>
    );
}
/* https://resources.turo.com/f/81934/416x284/6e085cbe0e/image_outdoors_416x285.jpg 
       https://resources.turo.com/f/81934/416x284/7c424a07d5/image_unwind_416x285.jpg
       https://resources.turo.com/f/81934/416x284/929b21c4fa/image_upgrade_416x285.jpg
       https://resources.turo.com/f/81934/416x284/1e828ae782/image_scenic_416x285.jpg
       https://resources.turo.com/f/81934/416x284/a3870434ac/image_try_416x285.jpg
       https://resources.turo.com/f/81934/416x284/fa43ee8e2b/image_errand_416x285.jpg
  
    */
export { SwipeToSlide, SecondSlider };