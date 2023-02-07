import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './WelcomePagePageStyle.css';
 

const slideImages = [
  'https://img.freepik.com/premium-vector/medical-health-care-web-banner-hospital-facebook-cover-social-media-cover-design-template_613250-76.jpg?w=2000',
  'https://www.canstar.com.au/wp-content/uploads/2017/02/Hospital-cover-in-health-insurance-1.jpg',
  'https://res.cloudinary.com/comparis-cms/image/upload/c_fill,g_center,w_2052,h_1100,f_auto,q_auto/v1638437549/health_insurance/overviewpages/zusastzversicherungen/spitalversicherung-halbprivat_iStock-1173046912_mnvjug_ikxws3.jpg'
];

const WelcomePage = () => {
 




    return (

      <div>
        
        <Slide easing="ease">
        <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
         
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
           
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
          
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default WelcomePage;