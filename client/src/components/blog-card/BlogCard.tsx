import React from 'react'
import { Link } from 'react-router-dom'

import blog from '../../assets/blog/blog-1.jpeg'

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src={blog} className="img-fluid" alt="" />
          <div className="block-content">
            <p className='date'>05 May 2023</p>
            <h5 className='title'>Blog Secure</h5>
            <p className='description'>This blog is from from secure</p>
            <Link to='#'>Read more</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard