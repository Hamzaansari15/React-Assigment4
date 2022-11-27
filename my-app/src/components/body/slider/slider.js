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


const FirstSlider = () => {

    const settings = {
        rows: 1,
        speed: 300,
        slidesPerRow: 1,
        slidesToShow: 5,
        infinite: false,
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
                    <div className="main_slider2 mx-5 mb-4">
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


const ThirdSlider = () => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="main_slider3 my-5">
            <div className="slider3">
                <h2 className="slider_heading mb-4"> Browse By destination</h2>
                <Slider {...settings}>

                    <div>
                        <div className="slider_box2 mx-2 my-2">
                            <div className="slider_image3">
                                <img className="image1 mt-2" src="https://resources.turo.com/f/81934/240x240/dcae922a23/illo_city_miami-2x.png " />
                                <img className="mt-2 image2" src="https://resources.turo.com/f/81934/240x240/ebf31d579f/illo_city_miami_hover-2x.png" />
                            </div>
                            <div className="slider_text3">
                                <h5 className="slider_text">Los Angeles</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slider_box2 mx-2 my-2">
                            <div className="slider_image3">
                                <img className="image1 mt-2" src="https://resources.turo.com/f/81934/240x240/bbe188de38/illo_city_honolulu-2x.png " />
                                <img className="mt-2 image2" src="https://resources.turo.com/f/81934/240x240/ee089eef85/illo_city_honolulu_hover-2x.png" />
                            </div>
                            <div className="slider_text3">
                                <h5 className="slider_text">Los Angeles</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slider_box2 mx-2 my-2">
                            <div className="slider_image3">
                                <img className="image1 mt-2" src="	https://resources.turo.com/f/81934/240x240/81f82e7068/illo_city_denver-2x.png" />
                                <img className="mt-2 image2" src="	https://resources.turo.com/f/81934/240x240/8b414f123e/illo_city_denver_hover-2x.png" />
                            </div>
                            <div className="slider_text3">
                                <h5 className="slider_text">Los Angeles</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slider_box2 mx-2 my-2">
                            <div className="slider_image3">
                                <img className="image1 mt-2" src="https://resources.turo.com/f/81934/240x240/1442627566/illo_city_london-2x.png" />
                                <img className="mt-2 image2" src="https://resources.turo.com/f/81934/240x240/957c774400/illo_city_london_hover-2x.png" />
                            </div>
                            <div className="slider_text3">
                                <h5 className="slider_text">Los Angeles</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slider_box2 mx-2 my-2">
                            <div className="slider_image3">
                                <img className="image1 mt-2" src="	https://resources.turo.com/f/81934/240x240/87ab56dd05/illo_city_toronto-2x.png" />
                                <img className="mt-2 image2" src="https://resources.turo.com/f/81934/240x240/f40b3c1e95/illo_city_toronto_hover-2x.png" />
                            </div>
                            <div className="slider_text3">
                                <h5 className="slider_text">Los Angeles</h5>
                            </div>
                        </div>
                    </div>
                    <div className="slider_box2 mx-2 my-2">
                        <div className="slider_image3">
                            <img className="image1 mt-2" src="https://resources.turo.com/f/81934/240x240/101ea2791a/illo_city_jerseycity-2x.png" />
                            <img className="mt-2 image2" src="https://resources.turo.com/f/81934/240x240/8a4598d799/illo_city_jerseycity_hover-2x.png" />
                        </div>
                        <div className="slider_text3">
                            <h5 className="slider_text">Los Angeles</h5>
                        </div>
                    </div>
                    <div>
                        <div className="slider_box2 mx-2 my-2">
                            <div className="slider_image3">
                                <img className="image1 mt-2" src="https://resources.turo.com/f/81934/240x240/c00858690e/illo_city_sanfrancisco-2x.png" />
                                <img className="mt-2 image2" src="	https://resources.turo.com/f/81934/240x240/3f9757ed81/illo_city_sanfrancisco_hover-2x.png" />
                            </div>
                            <div className="slider_text3">
                                <h5 className="slider_text">Los Angeles</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slider_box2 mx-2 my-2">
                            <div className="slider_image3">
                                <img className="image1 mt-2" src="https://resources.turo.com/f/81934/240x240/a49b80f1ba/illo_city_atlanta-2x.png" />
                                <img className="mt-2 image2" src="https://resources.turo.com/f/81934/240x240/1a1efd8d1e/illo_city_atlanta_hover-2x.png" />
                            </div>
                            <div className="slider_text3">
                                <h5 className="slider_text">Los Angeles</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slider_box2 mx-2 my-2">
                            <div className="slider_image3">
                                <img className="image1 mt-2" src="https://resources.turo.com/f/81934/240x240/af92b78ef2/illo_city_phoenix-2x.png" />
                                <img className="mt-2 image2" src="https://resources.turo.com/f/81934/240x240/b20a87cb5f/illo_city_phoenix_hover-2x.png" />
                            </div>
                            <div className="slider_text3">
                                <h5 className="slider_text">Los Angeles</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slider_box2 mx-2 my-2">
                            <div className="slider_image3">
                                <img className="image1 mt-2" src="https://resources.turo.com/f/81934/240x240/fba7dae74f/illo_city_orlando-2x.png" />
                                <img className="mt-2 image2" src="	https://resources.turo.com/f/81934/240x240/48caa5117b/illo_city_orlando_hover-2x.png" />
                            </div>
                            <div className="slider_text3">
                                <h5 className="slider_text">Los Angeles</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slider_box2 mx-2 my-2">
                            <div className="slider_image3">
                                <img className="image1 mt-2" src="https://resources.turo.com/f/81934/240x240/184058bb96/illo_city_lasvegas-2x.png" />
                                <img className="mt-2 image2" src="https://resources.turo.com/f/81934/240x240/c2abf3de26/illo_city_lasvegas_hover-2x.png" />
                            </div>
                            <div className="slider_text3">
                                <h5 className="slider_text">Los Angeles</h5>
                            </div>
                        </div>
                    </div>
                    <div className="slider_box2 mx-2 my-2">
                        <div className="slider_image3">
                            <img className="image1 mt-2" src="https://resources.turo.com/f/81934/240x240/b7eaeead8f/illo_city_dallas-2x.png" />
                            <img className="mt-2 image2" src="https://resources.turo.com/f/81934/240x240/34f2d3a05f/illo_city_dallas_hover-2x.png" />
                        </div>
                        <div className="slider_text3">
                            <h5 className="slider_text">Los Angeles</h5>
                        </div>
                    </div>
                    <div>
                        <div className="slider_box2 mx-2 my-2">
                            <div className="slider_image3">
                                <img className="image1 mt-2" src="https://resources.turo.com/f/81934/240x240/f29a6189f8/illo_city_washingtondc-2x.png" />
                                <img className="mt-2 image2" src="https://resources.turo.com/f/81934/240x240/158f7fa72b/illo_city_washingtondc_hover-2x.png" />
                            </div>
                            <div className="slider_text3">
                                <h5 className="slider_text">Los Angeles</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slider_box2 mx-2 my-2">
                            <div className="slider_image3">
                                <img className="image1 mt-2" src="https://resources.turo.com/f/81934/240x240/b919d90a34/illo_city_chicago-2x.png" />
                                <img className="mt-2 image2" src="https://resources.turo.com/f/81934/240x240/6512407c18/illo_city_chicago_hover-2x.png" />
                            </div>
                            <div className="slider_text3">
                                <h5 className="slider_text">Los Angeles</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slider_box2 mx-2 my-2">
                            <div className="slider_image3">
                                <img className="image1 mt-2" src="https://resources.turo.com/f/81934/240x240/35cc2cbc9d/illo_city_houston-2x.png" />
                                <img className="mt-2 image2" src="	https://resources.turo.com/f/81934/240x240/29eb3f7660/illo_city_houston_hover-2x.png" />
                            </div>
                            <div className="slider_text3">
                                <h5 className="slider_text">Los Angeles</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slider_box2 mx-2 my-2">
                            <div className="slider_image3">
                                <img className="image1 mt-2" src="https://resources.turo.com/f/81934/240x240/382323a545/illo_city_sandiego-2x.png" />
                                <img className="mt-2 image2" src="	https://resources.turo.com/f/81934/240x240/9a4ae77dbb/illo_city_sandiego_hover-2x.png" />
                            </div>
                            <div className="slider_text3">
                                <h5 className="slider_text">Los Angeles</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slider_box2 mx-2 my-2">
                            <div className="slider_image3">
                                <img className="image1 mt-2" src="https://resources.turo.com/f/81934/240x240/4201e99699/illo_city_boston-2x.png" />
                                <img className="mt-2 image2" src="https://resources.turo.com/f/81934/240x240/1a1fdfb037/illo_city_boston_hover-2x.png" />
                            </div>
                            <div className="slider_text3">
                                <h5 className="slider_text">Los Angeles</h5>
                            </div>
                        </div>
                    </div>

                    <div className="slider_box2 mx-0 my-2">
                        <div className="slider_image3">
                            <img className="image1 mt-2" src="https://resources.turo.com/f/81934/240x240/7825448638/illo_city_losangeles-2x.png" />
                            <img className="mt-2 image2" src="https://resources.turo.com/f/81934/240x240/76b4007676/illo_city_losangeles_hover-2x.png" />
                        </div>
                        <div className="slider_text3">
                            <h5 className="slider_text">Los Angeles</h5>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );

}



const FourthSlider = () => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="main_slider4 pt-4 mb-5 m-2">
            <div className="slider4">
                <h2 className="slider_heading4 my-2 mx-3">Browse by experience </h2>
                <div className="slider_flex">
                    <Slider {...settings}>
                        <div className="slider_box4">
                            <div className="slider_image4 mx-3 mt-4 mb-3"></div>
                            <div className="slider_bootom mx-3 "><svg width="32px" height="32px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Convertibles" class="seo-pages-0" role="img" version="1.1"><path d="m36.4 30.2-12.1-1.3H4.2v10h21.3c.7-1.3 2.2-2.3 3.8-2.3 1.6 0 3.1.9 3.8 2.3h6.5v-5.1c.1-1.9-1.3-3.5-3.2-3.6Z" fill="#E0CAFF"></path><path d="M34.8 6.7c-.6 0-1.1-.5-1.1-1.1V3.1c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1v2.4c.1.7-.4 1.2-1.1 1.2Z" fill="#593CFB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M34.9 17.4c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2.1 4.5-4.5 4.5Zm0-6.8c-1.2 0-2.3 1-2.3 2.3 0 1.3 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3 0-1.3-1.1-2.3-2.3-2.3Z" fill="#593CFB"></path><path d="M33.8 22.6c0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1v-2.4c0-.6-.5-1.1-1.1-1.1-.6 0-1.1.5-1.1 1.1v2.4ZM26.4 18.9c-.4 0-.8-.2-1-.6-.3-.5-.1-1.2.4-1.5l2.1-1.2c.5-.3 1.2-.1 1.5.4.3.5.1 1.2-.4 1.5l-2.1 1.2c-.1.1-.3.2-.5.2ZM40.2 9.7c.2.4.6.6 1 .6.2 0 .3 0 .5-.2l2.1-1.2c.5-.3.7-1 .4-1.5-.3-.5-1-.7-1.5-.4l-2.1 1.2c-.5.3-.7 1-.4 1.5ZM43.3 18.8c-.2 0-.4 0-.6-.2l-2.1-1.2c-.5-.3-.7-1-.4-1.5.3-.5 1-.7 1.5-.4l2.1 1.2c.5.3.7 1 .4 1.5-.1.4-.5.6-.9.6ZM27.9 10.1c.2.2.4.2.6.2.4 0 .8-.2 1-.5.3-.5.1-1.2-.4-1.5L27 7.1c-.5-.3-1.2-.1-1.5.4-.3.5-.1 1.2.4 1.5l2 1.1Z" fill="#593CFB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M34.944 40.2H39.7c.7 0 1.3-.6 1.4-1.3v-5.1c0-2.5-1.9-4.6-4.4-4.9l-11.8-1.2-10.2-8.1c-.6-.4-1.4-.3-1.8.2-.4.6-.3 1.4.2 1.8L23.6 30c.1.2.4.3.6.3l12.1 1.3c1.3.1 2.2 1.1 2.2 2.4v3.8h-4.3a.956.956 0 0 0-.187.019A5.587 5.587 0 0 0 29.4 35.4c-1.909 0-3.59.948-4.6 2.4H4.3c-.6 0-1.2.6-1.2 1.2s.5 1.2 1.2 1.2h19.556a5.687 5.687 0 0 0-.056.8c0 3.1 2.5 5.6 5.6 5.6 3.1 0 5.6-2.5 5.6-5.6 0-.272-.02-.539-.056-.8ZM26.3 41c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1Z" fill="#593CFB"></path><path d="M15.5 30.1H4.2c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2h11.3c.7 0 1.2.6 1.2 1.2s-.5 1.2-1.2 1.2Z" fill="#593CFB"></path></svg><div className="font mt-2 mx-2">Convertibles</div></div>
                        </div>
                        <div className="slider_box4">
                            <div className="slider_image4 mx-3 mt-4 mb-3"></div>
                            <div className="slider_bootom mx-3 "><svg width="32px" height="32px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Convertibles" class="seo-pages-0" role="img" version="1.1"><path d="m36.4 30.2-12.1-1.3H4.2v10h21.3c.7-1.3 2.2-2.3 3.8-2.3 1.6 0 3.1.9 3.8 2.3h6.5v-5.1c.1-1.9-1.3-3.5-3.2-3.6Z" fill="#E0CAFF"></path><path d="M34.8 6.7c-.6 0-1.1-.5-1.1-1.1V3.1c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1v2.4c.1.7-.4 1.2-1.1 1.2Z" fill="#593CFB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M34.9 17.4c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2.1 4.5-4.5 4.5Zm0-6.8c-1.2 0-2.3 1-2.3 2.3 0 1.3 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3 0-1.3-1.1-2.3-2.3-2.3Z" fill="#593CFB"></path><path d="M33.8 22.6c0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1v-2.4c0-.6-.5-1.1-1.1-1.1-.6 0-1.1.5-1.1 1.1v2.4ZM26.4 18.9c-.4 0-.8-.2-1-.6-.3-.5-.1-1.2.4-1.5l2.1-1.2c.5-.3 1.2-.1 1.5.4.3.5.1 1.2-.4 1.5l-2.1 1.2c-.1.1-.3.2-.5.2ZM40.2 9.7c.2.4.6.6 1 .6.2 0 .3 0 .5-.2l2.1-1.2c.5-.3.7-1 .4-1.5-.3-.5-1-.7-1.5-.4l-2.1 1.2c-.5.3-.7 1-.4 1.5ZM43.3 18.8c-.2 0-.4 0-.6-.2l-2.1-1.2c-.5-.3-.7-1-.4-1.5.3-.5 1-.7 1.5-.4l2.1 1.2c.5.3.7 1 .4 1.5-.1.4-.5.6-.9.6ZM27.9 10.1c.2.2.4.2.6.2.4 0 .8-.2 1-.5.3-.5.1-1.2-.4-1.5L27 7.1c-.5-.3-1.2-.1-1.5.4-.3.5-.1 1.2.4 1.5l2 1.1Z" fill="#593CFB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M34.944 40.2H39.7c.7 0 1.3-.6 1.4-1.3v-5.1c0-2.5-1.9-4.6-4.4-4.9l-11.8-1.2-10.2-8.1c-.6-.4-1.4-.3-1.8.2-.4.6-.3 1.4.2 1.8L23.6 30c.1.2.4.3.6.3l12.1 1.3c1.3.1 2.2 1.1 2.2 2.4v3.8h-4.3a.956.956 0 0 0-.187.019A5.587 5.587 0 0 0 29.4 35.4c-1.909 0-3.59.948-4.6 2.4H4.3c-.6 0-1.2.6-1.2 1.2s.5 1.2 1.2 1.2h19.556a5.687 5.687 0 0 0-.056.8c0 3.1 2.5 5.6 5.6 5.6 3.1 0 5.6-2.5 5.6-5.6 0-.272-.02-.539-.056-.8ZM26.3 41c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1Z" fill="#593CFB"></path><path d="M15.5 30.1H4.2c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2h11.3c.7 0 1.2.6 1.2 1.2s-.5 1.2-1.2 1.2Z" fill="#593CFB"></path></svg><div className="font mt-2 mx-2">Convertibles</div></div>
                        </div>
                        <div className="slider_box4">
                            <div className="slider_image4 mx-3 mt-4 mb-3"></div>
                            <div className="slider_bootom mx-3 "><svg width="32px" height="32px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Convertibles" class="seo-pages-0" role="img" version="1.1"><path d="m36.4 30.2-12.1-1.3H4.2v10h21.3c.7-1.3 2.2-2.3 3.8-2.3 1.6 0 3.1.9 3.8 2.3h6.5v-5.1c.1-1.9-1.3-3.5-3.2-3.6Z" fill="#E0CAFF"></path><path d="M34.8 6.7c-.6 0-1.1-.5-1.1-1.1V3.1c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1v2.4c.1.7-.4 1.2-1.1 1.2Z" fill="#593CFB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M34.9 17.4c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2.1 4.5-4.5 4.5Zm0-6.8c-1.2 0-2.3 1-2.3 2.3 0 1.3 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3 0-1.3-1.1-2.3-2.3-2.3Z" fill="#593CFB"></path><path d="M33.8 22.6c0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1v-2.4c0-.6-.5-1.1-1.1-1.1-.6 0-1.1.5-1.1 1.1v2.4ZM26.4 18.9c-.4 0-.8-.2-1-.6-.3-.5-.1-1.2.4-1.5l2.1-1.2c.5-.3 1.2-.1 1.5.4.3.5.1 1.2-.4 1.5l-2.1 1.2c-.1.1-.3.2-.5.2ZM40.2 9.7c.2.4.6.6 1 .6.2 0 .3 0 .5-.2l2.1-1.2c.5-.3.7-1 .4-1.5-.3-.5-1-.7-1.5-.4l-2.1 1.2c-.5.3-.7 1-.4 1.5ZM43.3 18.8c-.2 0-.4 0-.6-.2l-2.1-1.2c-.5-.3-.7-1-.4-1.5.3-.5 1-.7 1.5-.4l2.1 1.2c.5.3.7 1 .4 1.5-.1.4-.5.6-.9.6ZM27.9 10.1c.2.2.4.2.6.2.4 0 .8-.2 1-.5.3-.5.1-1.2-.4-1.5L27 7.1c-.5-.3-1.2-.1-1.5.4-.3.5-.1 1.2.4 1.5l2 1.1Z" fill="#593CFB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M34.944 40.2H39.7c.7 0 1.3-.6 1.4-1.3v-5.1c0-2.5-1.9-4.6-4.4-4.9l-11.8-1.2-10.2-8.1c-.6-.4-1.4-.3-1.8.2-.4.6-.3 1.4.2 1.8L23.6 30c.1.2.4.3.6.3l12.1 1.3c1.3.1 2.2 1.1 2.2 2.4v3.8h-4.3a.956.956 0 0 0-.187.019A5.587 5.587 0 0 0 29.4 35.4c-1.909 0-3.59.948-4.6 2.4H4.3c-.6 0-1.2.6-1.2 1.2s.5 1.2 1.2 1.2h19.556a5.687 5.687 0 0 0-.056.8c0 3.1 2.5 5.6 5.6 5.6 3.1 0 5.6-2.5 5.6-5.6 0-.272-.02-.539-.056-.8ZM26.3 41c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1Z" fill="#593CFB"></path><path d="M15.5 30.1H4.2c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2h11.3c.7 0 1.2.6 1.2 1.2s-.5 1.2-1.2 1.2Z" fill="#593CFB"></path></svg><div className="font mt-2 mx-2">Convertibles</div></div>
                        </div>
                        <div className="slider_box4">
                            <div className="slider_image4 mx-3 mt-4 mb-3"></div>
                            <div className="slider_bootom mx-3 "><svg width="32px" height="32px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Convertibles" class="seo-pages-0" role="img" version="1.1"><path d="m36.4 30.2-12.1-1.3H4.2v10h21.3c.7-1.3 2.2-2.3 3.8-2.3 1.6 0 3.1.9 3.8 2.3h6.5v-5.1c.1-1.9-1.3-3.5-3.2-3.6Z" fill="#E0CAFF"></path><path d="M34.8 6.7c-.6 0-1.1-.5-1.1-1.1V3.1c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1v2.4c.1.7-.4 1.2-1.1 1.2Z" fill="#593CFB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M34.9 17.4c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2.1 4.5-4.5 4.5Zm0-6.8c-1.2 0-2.3 1-2.3 2.3 0 1.3 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3 0-1.3-1.1-2.3-2.3-2.3Z" fill="#593CFB"></path><path d="M33.8 22.6c0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1v-2.4c0-.6-.5-1.1-1.1-1.1-.6 0-1.1.5-1.1 1.1v2.4ZM26.4 18.9c-.4 0-.8-.2-1-.6-.3-.5-.1-1.2.4-1.5l2.1-1.2c.5-.3 1.2-.1 1.5.4.3.5.1 1.2-.4 1.5l-2.1 1.2c-.1.1-.3.2-.5.2ZM40.2 9.7c.2.4.6.6 1 .6.2 0 .3 0 .5-.2l2.1-1.2c.5-.3.7-1 .4-1.5-.3-.5-1-.7-1.5-.4l-2.1 1.2c-.5.3-.7 1-.4 1.5ZM43.3 18.8c-.2 0-.4 0-.6-.2l-2.1-1.2c-.5-.3-.7-1-.4-1.5.3-.5 1-.7 1.5-.4l2.1 1.2c.5.3.7 1 .4 1.5-.1.4-.5.6-.9.6ZM27.9 10.1c.2.2.4.2.6.2.4 0 .8-.2 1-.5.3-.5.1-1.2-.4-1.5L27 7.1c-.5-.3-1.2-.1-1.5.4-.3.5-.1 1.2.4 1.5l2 1.1Z" fill="#593CFB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M34.944 40.2H39.7c.7 0 1.3-.6 1.4-1.3v-5.1c0-2.5-1.9-4.6-4.4-4.9l-11.8-1.2-10.2-8.1c-.6-.4-1.4-.3-1.8.2-.4.6-.3 1.4.2 1.8L23.6 30c.1.2.4.3.6.3l12.1 1.3c1.3.1 2.2 1.1 2.2 2.4v3.8h-4.3a.956.956 0 0 0-.187.019A5.587 5.587 0 0 0 29.4 35.4c-1.909 0-3.59.948-4.6 2.4H4.3c-.6 0-1.2.6-1.2 1.2s.5 1.2 1.2 1.2h19.556a5.687 5.687 0 0 0-.056.8c0 3.1 2.5 5.6 5.6 5.6 3.1 0 5.6-2.5 5.6-5.6 0-.272-.02-.539-.056-.8ZM26.3 41c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1Z" fill="#593CFB"></path><path d="M15.5 30.1H4.2c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2h11.3c.7 0 1.2.6 1.2 1.2s-.5 1.2-1.2 1.2Z" fill="#593CFB"></path></svg><div className="font mt-2 mx-2">Convertibles</div></div>
                        </div>
                        <div className="slider_box4">
                            <div className="slider_image4 mx-3 mt-4 mb-3"></div>
                            <div className="slider_bootom mx-3 "><svg width="32px" height="32px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Convertibles" class="seo-pages-0" role="img" version="1.1"><path d="m36.4 30.2-12.1-1.3H4.2v10h21.3c.7-1.3 2.2-2.3 3.8-2.3 1.6 0 3.1.9 3.8 2.3h6.5v-5.1c.1-1.9-1.3-3.5-3.2-3.6Z" fill="#E0CAFF"></path><path d="M34.8 6.7c-.6 0-1.1-.5-1.1-1.1V3.1c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1v2.4c.1.7-.4 1.2-1.1 1.2Z" fill="#593CFB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M34.9 17.4c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2.1 4.5-4.5 4.5Zm0-6.8c-1.2 0-2.3 1-2.3 2.3 0 1.3 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3 0-1.3-1.1-2.3-2.3-2.3Z" fill="#593CFB"></path><path d="M33.8 22.6c0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1v-2.4c0-.6-.5-1.1-1.1-1.1-.6 0-1.1.5-1.1 1.1v2.4ZM26.4 18.9c-.4 0-.8-.2-1-.6-.3-.5-.1-1.2.4-1.5l2.1-1.2c.5-.3 1.2-.1 1.5.4.3.5.1 1.2-.4 1.5l-2.1 1.2c-.1.1-.3.2-.5.2ZM40.2 9.7c.2.4.6.6 1 .6.2 0 .3 0 .5-.2l2.1-1.2c.5-.3.7-1 .4-1.5-.3-.5-1-.7-1.5-.4l-2.1 1.2c-.5.3-.7 1-.4 1.5ZM43.3 18.8c-.2 0-.4 0-.6-.2l-2.1-1.2c-.5-.3-.7-1-.4-1.5.3-.5 1-.7 1.5-.4l2.1 1.2c.5.3.7 1 .4 1.5-.1.4-.5.6-.9.6ZM27.9 10.1c.2.2.4.2.6.2.4 0 .8-.2 1-.5.3-.5.1-1.2-.4-1.5L27 7.1c-.5-.3-1.2-.1-1.5.4-.3.5-.1 1.2.4 1.5l2 1.1Z" fill="#593CFB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M34.944 40.2H39.7c.7 0 1.3-.6 1.4-1.3v-5.1c0-2.5-1.9-4.6-4.4-4.9l-11.8-1.2-10.2-8.1c-.6-.4-1.4-.3-1.8.2-.4.6-.3 1.4.2 1.8L23.6 30c.1.2.4.3.6.3l12.1 1.3c1.3.1 2.2 1.1 2.2 2.4v3.8h-4.3a.956.956 0 0 0-.187.019A5.587 5.587 0 0 0 29.4 35.4c-1.909 0-3.59.948-4.6 2.4H4.3c-.6 0-1.2.6-1.2 1.2s.5 1.2 1.2 1.2h19.556a5.687 5.687 0 0 0-.056.8c0 3.1 2.5 5.6 5.6 5.6 3.1 0 5.6-2.5 5.6-5.6 0-.272-.02-.539-.056-.8ZM26.3 41c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1Z" fill="#593CFB"></path><path d="M15.5 30.1H4.2c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2h11.3c.7 0 1.2.6 1.2 1.2s-.5 1.2-1.2 1.2Z" fill="#593CFB"></path></svg><div className="font mt-2 mx-2">Convertibles</div></div>
                        </div>
                        <div className="slider_box4">
                            <div className="slider_image4 mx-3 mt-4 mb-3"></div>
                            <div className="slider_bootom mx-3 "><svg width="32px" height="32px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Convertibles" class="seo-pages-0" role="img" version="1.1"><path d="m36.4 30.2-12.1-1.3H4.2v10h21.3c.7-1.3 2.2-2.3 3.8-2.3 1.6 0 3.1.9 3.8 2.3h6.5v-5.1c.1-1.9-1.3-3.5-3.2-3.6Z" fill="#E0CAFF"></path><path d="M34.8 6.7c-.6 0-1.1-.5-1.1-1.1V3.1c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1v2.4c.1.7-.4 1.2-1.1 1.2Z" fill="#593CFB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M34.9 17.4c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2.1 4.5-4.5 4.5Zm0-6.8c-1.2 0-2.3 1-2.3 2.3 0 1.3 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3 0-1.3-1.1-2.3-2.3-2.3Z" fill="#593CFB"></path><path d="M33.8 22.6c0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1v-2.4c0-.6-.5-1.1-1.1-1.1-.6 0-1.1.5-1.1 1.1v2.4ZM26.4 18.9c-.4 0-.8-.2-1-.6-.3-.5-.1-1.2.4-1.5l2.1-1.2c.5-.3 1.2-.1 1.5.4.3.5.1 1.2-.4 1.5l-2.1 1.2c-.1.1-.3.2-.5.2ZM40.2 9.7c.2.4.6.6 1 .6.2 0 .3 0 .5-.2l2.1-1.2c.5-.3.7-1 .4-1.5-.3-.5-1-.7-1.5-.4l-2.1 1.2c-.5.3-.7 1-.4 1.5ZM43.3 18.8c-.2 0-.4 0-.6-.2l-2.1-1.2c-.5-.3-.7-1-.4-1.5.3-.5 1-.7 1.5-.4l2.1 1.2c.5.3.7 1 .4 1.5-.1.4-.5.6-.9.6ZM27.9 10.1c.2.2.4.2.6.2.4 0 .8-.2 1-.5.3-.5.1-1.2-.4-1.5L27 7.1c-.5-.3-1.2-.1-1.5.4-.3.5-.1 1.2.4 1.5l2 1.1Z" fill="#593CFB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M34.944 40.2H39.7c.7 0 1.3-.6 1.4-1.3v-5.1c0-2.5-1.9-4.6-4.4-4.9l-11.8-1.2-10.2-8.1c-.6-.4-1.4-.3-1.8.2-.4.6-.3 1.4.2 1.8L23.6 30c.1.2.4.3.6.3l12.1 1.3c1.3.1 2.2 1.1 2.2 2.4v3.8h-4.3a.956.956 0 0 0-.187.019A5.587 5.587 0 0 0 29.4 35.4c-1.909 0-3.59.948-4.6 2.4H4.3c-.6 0-1.2.6-1.2 1.2s.5 1.2 1.2 1.2h19.556a5.687 5.687 0 0 0-.056.8c0 3.1 2.5 5.6 5.6 5.6 3.1 0 5.6-2.5 5.6-5.6 0-.272-.02-.539-.056-.8ZM26.3 41c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1Z" fill="#593CFB"></path><path d="M15.5 30.1H4.2c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2h11.3c.7 0 1.2.6 1.2 1.2s-.5 1.2-1.2 1.2Z" fill="#593CFB"></path></svg><div className="font mt-2 mx-2">Convertibles</div></div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}


export { FirstSlider, SecondSlider, ThirdSlider, FourthSlider };