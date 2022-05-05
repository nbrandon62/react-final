import React from 'react'
import Jumbotron from '../Components/Jumbotron'
import NavBar from '../Components/NavBar'
import ProductCard from '../Components/ProductCard'
import ProductGrid from '../Components/ProductGrid'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Jumbotron />
      <ProductGrid/>      
    </div>

  )
}

export default HomePage