import React from 'react'

import './Home.scss'
import tv1 from '../../../assets/items/tv1.png'
import laptop1 from '../../../assets/items/laptop1.png'
import { options } from '../../../components/home/options/options'

const Home = () => {
  return (
    <div className='container'>
      <section>

        {/* promotions */}
        <div className="grid-container">
          <div className="item1">
            <div className="left">
              <p className='supercharged'>supercharged for pros</p>
              <h4>Special sale</h4>
              <p className='price-range'>Ranges between R1500 to R5600</p>
              <button>buy now</button>
            </div>
            <div className="right">
              <img src={tv1} alt="" />
            </div>
          </div>
          <div className="item2">
            <div className="left">
              <p className='best-sale'>Best sale</p>
              <h4>Laptop Max</h4>
              <p className='price-range'>R5678</p>
            </div>
            <div className="right">
              <img src={laptop1} alt="" />
            </div>
          </div>
          <div className="item3">
            <div className="left">
              <p className='best-sale'>Best sale</p>
              <h4>Laptop Max</h4>
              <p className='price-range'>R5678</p>
            </div>
            <div className="right">
              <img src={laptop1} alt="" />
            </div>
          </div>  
          <div className="item4">
            <div className="left">
              <p className='best-sale'>Best sale</p>
              <h4>Laptop Max</h4>
              <p className='price-range'>R5678</p>
            </div>
            <div className="right">
              <img src={laptop1} alt="" />
            </div>
          </div>
          <div className="item5">
            <div className="left">
              <p className='best-sale'>Best sale</p>
              <h4>Laptop Max</h4>
              <p className='price-range'>R5678</p>
            </div>
            <div className="right">
              <img src={laptop1} alt="" />
            </div>
          </div>
        </div>

        {/*  */}
        <div className="products">
          <div className="options">
            {options.map((option, index) => {
              return (
                <div className="option" key={index}>
                  <div className="icon">{option.icon}</div>
                  <div className="text-group">
                    <p>{option.title}</p>
                    <p>{option.phrase}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home