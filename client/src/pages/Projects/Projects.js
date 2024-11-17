import React from 'react';
import Slider from 'react-slick';
import './Projects.css';
import todo from '../../images/todo.png';
import tempconverterproj1 from '../../images/tempconverterproj1.png';
import tempConvert from '../../images/tempconverterproj2.png';
import fruit1 from '../../images/fruit.png'

// Slider CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,  // Show 2 slides at a time
    slidesToScroll: 2,  // Scroll 2 slides at a time
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='container project' id='projects'>
      <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
        Top Recent Projects
      </h2>
      <hr />
      <p className='pb-3 text-center'>
        👉 Here are my top many Projects with live links and source code
      </p>
      <Slider {...settings}>
        {/* Project 1 */}
        <div className='div1'>
          <div className='card rounded'>
            <div className='card-image'>
              <span className='card-notify-badge'>Web App</span>
              <img src={todo} alt='Todo App' style={{height:"350px"}} />
            </div>
            <div className='card-image-overly'>
              <span className='card-detail-badge'>MongoDB</span>
              <span className='card-detail-badge'>ExpressJs</span>
              <span className='card-detail-badge'>React</span>
              <span className='card-detail-badge'>NodeJs</span>
            </div>
            <div className='card-body text-center'>
              <h5 className='text-uppercase'>Todo App</h5>
              <a className='ad-btn' href='https://todoapp3-8zpf.onrender.com/'>View</a>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className='div1'>
          <div className='card rounded'>
            <div className='card-image'>
              <span className='card-notify-badge'>Web App</span>
              <img src={tempConvert} alt='Temperature Converter' style={{height:"350px"}} />
            </div>
            <div className='card-image-overly'>
              <span className='card-detail-badge'>HTML</span>
              <span className='card-detail-badge'>CSS</span>
              <span className='card-detail-badge'>JavaScript</span>
            </div>
            <div className='card-body text-center'>
              <h5 className='text-uppercase'>Temperature Converter</h5>
              <a className='ad-btn' href='https://singhtemperature.vercel.app/'>View</a>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div className='div1'>
          <div className='card rounded'>
            <div className='card-image'>
              <span className='card-notify-badge'>Web App</span>
              <img src={fruit1} alt='V-Mart Bazaar ' style={{height:"350px"}} />
            </div>
            <div className='card-image-overly'>
              <span className='card-detail-badge'>ExpressJs</span>
              <span className='card-detail-badge'>React</span>
              <span className='card-detail-badge'>NodeJs</span>
            </div>
            <div className='card-body text-center'>
              <h5 className='text-uppercase'>Fruit.Ai</h5>
              <a className='ad-btn' href='https://kmlfruit.vercel.app/'>View</a>
            </div>
          </div>
        </div>
        {/* Project 4 */}
        <div className='div1'>
          <div className='card rounded'>
            <div className='card-image'>
              <span className='card-notify-badge'>Web App</span>
              <img src={tempconverterproj1} alt='V-Mart Bazaar' style={{height:"350px"}} />
            </div>
            <div className='card-image-overly'>
              <span className='card-detail-badge'>MongoDB</span>
              <span className='card-detail-badge'>ExpressJs</span>
              <span className='card-detail-badge'>React</span>
              <span className='card-detail-badge'>NodeJs</span>
            </div>
            <div className='card-body text-center'>
              <h5 className='text-uppercase'>🛒 V-Mart Bazaar</h5>
              <a className='ad-btn' href='https://github.com/kamal-1270/Mern-Stack_Vmart_Bazaar'>View</a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Projects;
