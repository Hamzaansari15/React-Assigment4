const FirstSliderComponent = (props) => {

  return (
    <div className="center">
      <span className='slider_box'>
        <div className='slider_image'>
          <img src={props.image} alt = ''/>
          <h6 className="slider_text">{props.title}</h6>
        </div>
      </span>
    </div>
  )
}

const SecondSlidercomponent = (props) => {
  return (
    <>
      <div className="main_slider2 mx-5 mb-4">
        <div className="slider2">
          <div className="slider_image2 mx-3 mb-3">
            <img
              className="d-block"
              src={props.image}
              alt="First slide" />
          </div>
          <div className="slider_caption mx-3 mb-3">
            <h2 className="slider_heading2">Find the perfect car
              <span> {props.heading}</span>
            </h2>
            <p className="slider_text2 mt-3">{props.text}</p>
            <SliderBtn />
          </div>
        </div>
      </div>
    </>
  )
}

const ThirdSliderComponent = (props) => {
  return (
    <div className="position">
      <div className="center">
        <div className="slider_box2 mx-2 my-2">
          <div className="slider_image3">
            <img className="image1 mt-2" src={props.image1} alt = ''/>
            <img className="mt-2 image2" src={props.image2} alt = ''/>
          </div>
          <div className="slider_text3">
            <h5 className="slider_text">{props.text}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

const FourthSliderComponent = (props) => {
  return (
    <div className="position">
      <div className="center">
        <div className="slider_box4 mb-5">
          <div className="slider_image4"><img src={props.image} alt = '' /></div>
          <div className="slider_bottm mx-3 my-3">{props.svg}<span>{props.text}</span></div>
        </div>
      </div>
    </div>
  )
}

const FifthSliderComponent = (props) => {
  return (
    <div className="center">
      <div className="main_box">
        <div className="slider_box5">
          <div className="top_section mt-2">
            <div className="top_image"><img src={props.image} alt = ''/></div>
            <div className="top_text mx-3 mb-2">
              <h5>{props.name}</h5>
              <div className="top_inner_text">
                <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="All-Star Host" aria-labelledby="allStarHostLabel" className="seo-pages-0" role="img" version="1.1"><path fillRule="evenodd" clipRule="evenodd" d="m19.585 13.072 2.257 2.76a.7.7 0 0 1-.404 1.128l-2.871.575-1.18 3.538a.698.698 0 0 1-.664.478.7.7 0 0 1-.593-.326l-2.376-3.771a.554.554 0 0 1 .294-.826 8.623 8.623 0 0 0 4.649-3.525c.201-.31.655-.315.888-.03Zm-15.169 0c.234-.284.688-.278.889.03a8.62 8.62 0 0 0 4.648 3.526c.345.108.487.52.294.826l-2.376 3.77a.703.703 0 0 1-1.258-.151l-1.18-3.538-2.87-.574a.698.698 0 0 1-.404-1.13l2.257-2.758Zm11.242-5.249-1.715 1.455.522 2.171a.383.383 0 0 1-.574.417l-1.89-1.174-1.89 1.173a.383.383 0 0 1-.576-.417l.524-2.17-1.714-1.451a.384.384 0 0 1 .215-.678l2.242-.157.843-2.039a.383.383 0 0 1 .709 0l.843 2.039 2.24.155a.384.384 0 0 1 .22.676ZM12 2a6.667 6.667 0 1 0 .001 13.334 6.667 6.667 0 0 0 0-13.334Z" fill="#121214"></path></svg>
                <span className="mx-1">All-Star Host</span>
              </div>
            </div>
          </div>
          <div className="middle-section mt-4 mb-2">
            <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="seo-pages-1moeh8l" role="img" version="1.1"><path fillRule="evenodd" clipRule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#593CFB"></path></svg>
            <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="seo-pages-1moeh8l" role="img" version="1.1"><path fillRule="evenodd" clipRule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#593CFB"></path></svg>
            <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="seo-pages-1moeh8l" role="img" version="1.1"><path fillRule="evenodd" clipRule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#593CFB"></path></svg>
            <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="seo-pages-1moeh8l" role="img" version="1.1"><path fillRule="evenodd" clipRule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#593CFB"></path></svg>
            <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="seo-pages-1moeh8l" role="img" version="1.1"><path fillRule="evenodd" clipRule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#593CFB"></path></svg>
          </div>
          <div className="bottom_section">
            <p>{props.review}</p>
            <p className="small_font">Donna S. - Nov 2022</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const SliderBtn = () => {
  return (
    <div className="mt-5">
      <button className="p-2 px-3 slider_btn">Browse car</button>
    </div>
  )
}

export {
  FirstSliderComponent,
  SecondSlidercomponent,
  ThirdSliderComponent,
  FourthSliderComponent,
  FifthSliderComponent,
};
