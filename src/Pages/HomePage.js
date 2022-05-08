import React from 'react'
import Footer from '../Components/Footer'
import Jumbotron from '../Components/Jumbotron'
import NavBar from '../Components/NavBar'
import ProductCard from '../Components/ProductCard'
import ProductGrid from '../Components/ProductGrid'
import SingleProductPage from './SingleProductPage'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      {/* <Jumbotron />
      <ProductGrid />    */}
      <SingleProductPage />
      <Footer />
    </div>

  )
}

export default HomePage