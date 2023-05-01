import React from 'react'

import { services } from '../data/ServiceData'
import { items } from '../data/ItemsData'

const Offers = () => {
  return (
    <section className='offers'>
        <div className="container">
            <div className={window.innerWidth > 768 ? "services": "services-scroll"}>
                {services.map(service => (
                    <div className={window.innerWidth > 768 ? "services-offer" : "small"} key={service.id}>
                        <service.icon className='icon'/>
                        <div className="content">
                            <h5>{service.desc}</h5>
                            <p>{service.text}</p>
                        </div>
                    </div>        
                ))}
            </div>
            <div className="items">
                <div className="products">
                    {items.map(item => (
                        <div className="product">
                            <div className="content">
                                <h5>{item.desc}</h5>
                                <p>{item.text}</p>
                            </div>
                            <div className="image">
                                <img src={item.image} alt="product" />
                            </div>
                        </div>
                    ))}
                </div>
                <hr />
                <div className="products">
                    {items.map(item => (
                        <div className="product">
                            <div className="content">
                                <h5>{item.desc}</h5>
                                <p>{item.text}</p>
                            </div>
                            <div className="image">
                                <img src={item.image} alt="product" />
                            </div>
                        </div>
                    ))}
                </div>
            </div> 
        </div>
    </section>
  )
}

export default Offers