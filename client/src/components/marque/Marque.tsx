import React from 'react'
import Marquee from 'react-fast-marquee'

import { images } from '../data/Marque'

const Marque = () => {
  return (
    <section className='marque' >
        <div className="container">
            <div className="card-wrapper">
                <Marquee className='marque-container'>
                    {images.map(item => (
                        <div key={item.id} className='brand'>
                            <img className={window.innerWidth > 768 ? "web" : "small"}src={item.image} alt="brand" />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    </section>
  )
}

export default Marque