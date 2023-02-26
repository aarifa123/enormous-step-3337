import React from 'react'
import Navbar from "../components/Navbar"
import Carousel from "../components/Carousel"
import Categories from '../components/Categories'
import Products from "../components/Products"
import UppNav from "../components/uppNav"
import LargeWithAppLinksAndSocial from "../components/Footer"
import Upfooter from '../components/Upfooter'




export default function Home() {
  return (
    <div>
      <UppNav/>
      <Navbar/>
      <Carousel/>
<Categories/>
<Products/>
<Upfooter/>
<LargeWithAppLinksAndSocial/>

    </div>
  )
}
