import React from 'react'
import './Footer.css'

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer (){



  return (
    <div className='footer'>
        <section className='sec1'>
          <div>
            <h3 className="fra">Afrikanest <span className="spex">HOME RETOUCH</span></h3>

            <p className='footer-body'>
              Afrikanest enables home owners and <br/>
              renters to inquire and receive house <br/>
              renovation services at the comfort of their sofa.<br/>
            </p>
          </div>
             
          <div className="section-2">
            <div className='sec2'>
                <h4>About Us </h4> 
                <ul>
                  <li>Our Story</li>
                  <li>Our team</li>
                  <li>Contact us</li>
                  <li>Careers</li>
                </ul> 
            </div>
            <div className='sec2'>
                <h4>Quick Links </h4> 
                <ul>
                  <li>Privacy Policy</li>
                  <li>Management</li>
                  <li>Help Centre</li>
                  <li>Blog</li>
                </ul> 
            </div>
          </div>
        </section>

        
        <hr/>
        <div className ="social">
          <div>
            <TwitterIcon size="large"
            aria-label="add" 
            sx={{width:25, height:25, marginLeft:2}} />
            <LinkedInIcon size="large"
            aria-label="add" 
            sx={{width:25, height:25, marginLeft:2}} />
            <FacebookRoundedIcon size="large"
            aria-label="add" 
            sx={{width:25, height:25, fontsize: "40px", marginLeft: 2}} />
          </div>
        <p className='copy'>All Rights Reserved @2022 </p>
      </div>
    </div>
  )
}

export default Footer