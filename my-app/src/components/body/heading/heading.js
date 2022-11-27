import './heading.css';
const Heading = ({ heading, smallHeading }) => {
    return (
        <div>
            <div className='main_heading'>
                <p id='heading'>{heading}</p>
            </div>
            <div id='small_heading_div'><p id='small_heading'>{smallHeading}</p></div>
        </div>
    )
}

const SecondHeading = () => {
    return (
        <div className='container'>
            <div className='second_heading'>Fuel your daydreams</div>
            <div className='heading_text my-3'>Stoke your wanderlust with some dreamy photo chronicles of road trip adventures.</div>
            <div className='heading_btn my-4'><button className='mb-4'>Explore Travelogues</button></div>
        </div>
    )
}

const ImageSection = () => {
    return (
        <div className='mb-5 mian_image_section mb-5'>
            <div className='text_box mx-3'>
                <div className='background_image'></div>
                <div className='main_text_div'>
                    <div className='div_text'>
                        <div className='first_line mt-2'>FEATURED TRAVELOGUES</div>
                        <div className='second_line my-3'>An Olymic experience in Washington</div>
                        <div className='third_line'>Disocver the epic waterfalls, moody weather, and lush forests of coastal Washington.</div>
                        <div className='text_link my-3'><a href='#'>Read more</a></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export { Heading, SecondHeading, ImageSection };