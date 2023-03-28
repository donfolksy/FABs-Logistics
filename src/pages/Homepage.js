import React from 'react'
import HomeService from '../components/HomePage/HomeService'
import Whychooseus from '../components/HomePage/Whychooseus'
import Testimonial from '../components/HomePage/Testimonial'
import Update from '../components/Update'
import Footerbar from '../components/Footerbar'
const Homepage = () => {
  return (
    <div>
      <HomeService/>
      <Whychooseus/>
      <Testimonial/>
      <Update/>
      <Footerbar/>
    </div>
  )
}

export default Homepage
