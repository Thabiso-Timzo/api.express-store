import React from 'react'


import BlogCard from '../blog-card/BlogCard'

const Blog = () => {
  return (
    <section className={window.innerWidth > 768 ?"blog-wrapper": "blog-wrapper-2"}>
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