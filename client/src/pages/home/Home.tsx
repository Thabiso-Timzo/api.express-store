import React from 'react'

import { services } from '../../components/data/ServiceData'
import { items } from '../../components/data/ItemsData'

import { images } from '../../components/data/Marque'

import Banner from '../../components/banner/Banner'
import Offers from '../../components/offers/Offers'
import Marque from '../../components/marque/Marque'
import Blog from '../../components/blog/Blog'
import Product from '../../components/product/Product'
import Special from '../../components/special/Special'
import PopularProducts from '../../components/popular-products/PopularProducts'

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Offers services={services} items={items} />
      <Product />
      <Special />
      <PopularProducts />
      <Marque images={images} />
      <Blog />
    </div>
  )
}

export default Home