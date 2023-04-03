import React from 'react'
import Herosection from '../components/HomePage/Herosection'
import HomeService from '../components/HomePage/HomeService'
import Whychooseus from '../components/HomePage/Whychooseus'
import Testimonial from '../components/HomePage/Testimonial'
import Update from '../components/HomePage/Update'
import Footerbar from '../components/HomePage/Footerbar'
const Homepage = () => {
  return (
    <div>
      <Herosection/>
      <HomeService/>
      <Whychooseus/>
      <Testimonial/>
      <Update/>
      <Footerbar/>
    </div>
  )
}

export default Homepage
