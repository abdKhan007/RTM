// import React
import React from 'react'

// import Components
import Hero from '../components/hero/hero/Hero'
import Product from '../components/product/Product'
import History from '../components/history/History'
import Housemates from '../components/housemates/Housemates'
import Services from '../components/services/Services'
import Login from '../components/login/Login'
import Map from '../components/map/Map'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Product/>
      <History/>
      <Housemates/>
      <Services/>
      <Login/>
      <Map/>
    </div>
  )
}

export default Home
