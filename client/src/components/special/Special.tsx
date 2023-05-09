import React from 'react'
import SpecialCard from '../special-card/SpecialCard'

const Special = () => {
  return (
    <div className="spacial">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <h3 className='section-heading'>Special Products</h3>
                </div>
            </div>
            <div className="row">
                <SpecialCard />
                <SpecialCard />
                <SpecialCard />
            </div>
        </div>
    </div>
  )
}

export default Special