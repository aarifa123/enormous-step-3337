import React from 'react'
import Navbar from "../components/Navbar"
import Carousel from "../components/Carousel"
import Categories from '../components/Categories'
import Products from "../components/Products"

import LargeWithAppLinksAndSocial from "../components/Footer"
export default function Home() {
  return (
    <div>
<Navbar/>
      <Carousel/>
<Categories/>
<Products/>

<LargeWithAppLinksAndSocial/>
    </div>
  )
}
