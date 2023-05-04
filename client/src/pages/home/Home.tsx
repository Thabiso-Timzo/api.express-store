import React from 'react'

import Banner from '../../components/banner/Banner'
import Offers from '../../components/offers/Offers'
import Marque from '../../components/marque/Marque'
import Blog from '../../components/blog/Blog'
import Product from '../../components/product/Product'

const Home = () => {
  return (
    <>
      <Banner />
      <Offers />
      <Marque />
      <Product />
      <Blog />
    </>
  )
}

export default Home