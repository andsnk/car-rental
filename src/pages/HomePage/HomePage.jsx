import React from 'react'
import {StyledHomePage, Button}  from './HomePage.styled'

const HomePage = () => {
  return (
    <div>
       <StyledHomePage>
      <h1>Discover Ukraine with Our Car Rental Services</h1>
      <Button to='/catalog'>Let's Go</Button>
    </StyledHomePage>
    </div>
  )
}

export default HomePage
