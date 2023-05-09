import React from 'react'
import { Link } from 'react-router-dom'

import banner from '../../assets/product/banner.jpeg'

const Banner = () => {

  return (
    <section className='banner'>
       <div className="container-xxl">
          <div className="image-container">
            <div className="main-image">
                <img src={banner} alt="" />
                <div className="container">
                  <h4>Thabiso</h4>
                  <h5>Hlatshwayo</h5>
                  <p>is running</p>
                  <Link to='#'>Buy now</Link>
                </div>
            </div>
            <div className="image">
                <div className="image-row">
                  <div className="image-wrapper">
                    <img src={banner} alt="" />
                    <div className="container">
                      <h4>Thabiso</h4>
                      <h5>Hlatshwayo</h5>
                      <p>is running</p>
                    </div>
                  </div>
                  <div className="image-wrapper">
                    <img src={banner} alt="" />
                    <div className="container">
                      <h4>Thabiso</h4>
                      <h5>Hlatshwayo</h5>
                      <p>is running</p>
                    </div>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-wrapper">
                    <img src={banner} alt="" />
                    <div className="container">
                      <h4>Thabiso</h4>
                      <h5>Hlatshwayo</h5>
                      <p>is running</p>
                    </div>
                  </div>
                  <div className="image-wrapper">
                    <img src={banner} alt="" />
                    <div className="container">
                      <h4>Thabiso</h4>
                      <h5>Hlatshwayo</h5>
                      <p>is running</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
       </div>
    </section>
  )
}

export default Banner