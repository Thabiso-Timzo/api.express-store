import React from 'react'


import BlogCard from '../blog-card/BlogCard'

const Blog = () => {
  return (
    <section className="blog-wrapper">
        <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className='section-heading'>Our Latest Blog</h3>
              </div>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    </section>
  )
}

export default Blog