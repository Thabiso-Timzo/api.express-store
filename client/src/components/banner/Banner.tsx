import React from 'react'
import { Link } from 'react-router-dom'

import banner from '../../assets/product/banner.jpeg'

const Banner = () => {

  return (
    <section className='banner'>
        <div className={window.innerWidth > 768 ? "big-container" : "small-container"}>
          <div className={window.innerWidth > 768 ?"image-box-1" : "image-box-2"}>
            <img className="image" src={banner} alt="" />
            <div className={window.innerWidth > 768 ? "content-1" : "content-2"}>
              <h4>Laptop</h4> 
              <h5>15 Inch laptop</h5>
              <p>R6700</p>
              <Link to='#' className={window.innerWidth > 768 ? 'button-1': 'button-2'}>Buy Now</Link>
            </div>
          </div>
          <div className="images">
            <div className={window.innerWidth > 768 ? "image-row-1": "image-row-2"}>
              <div className={window.innerWidth > 768 ?"image-box-1" : "image-box-2"}>
                <img className="image-1" src={banner} alt="" />
                <div className={window.innerWidth > 768 ? "content-1" : "content-2"}>
                  <h4>Laptop</h4> 
                  <h5>15 Inch laptop</h5>
                  <p>R6700</p>
                </div>
              </div>
              <div className={window.innerWidth > 768 ?"image-box-1" : "image-box-2"}>
                <img className="image-2" src={banner} alt="" />
                <div className={window.innerWidth > 768 ? "content-1" : "content-2"}>
                  <h4>Laptop</h4> 
                  <h5>15 Inch laptop</h5>
                  <p>R6700</p>
                </div>
              </div>
            </div>
            <div className={window.innerWidth > 768 ? "image-row-1": "image-row-2"}>
              <div className={window.innerWidth > 768 ?"image-box-1" : "image-box-2"}>
                <img className="image-3" src={banner} alt="" />
                <div className={window.innerWidth > 768 ? "content-1" : "content-2"}>
                  <h4>Laptop</h4> 
                  <h5>15 Inch laptop</h5>
                  <p>R6700</p>
                </div>
              </div>
              <div className={window.innerWidth > 768 ?"image-box-1" : "image-box-2"}>
                <img className="image-4" src={banner} alt="" />
                <div className={window.innerWidth > 768 ? "content-1" : "content-2"}>
                  <h4>Laptop</h4> 
                  <h5>15 Inch laptop</h5>
                  <p>R6700</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Banner