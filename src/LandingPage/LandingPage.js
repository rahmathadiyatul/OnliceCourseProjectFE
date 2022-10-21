import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '@fontsource/montserrat'
import '@fontsource/inter'
import HomeBody from '../Components/Homepage/HomeBody'
// const cors = require('cors')
// const classes = require('../Components/Homepage/classDummy')

const LandingPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header></Header>
      <HomeBody></HomeBody>
      <Footer></Footer>
    </div >
  )
}

export default LandingPage
