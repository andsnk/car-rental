import React from 'react';
import { StyledHomePage, Button, HeroTitle } from './HomePage.styled';

const HomePage = () => {
  return (
    <div>
      <StyledHomePage>
        <HeroTitle>Discover Ukraine with Our Car Rental Services</HeroTitle>
        <Button to="/catalog">Let's Go</Button>
      </StyledHomePage>
    </div>
  );
};

export default HomePage;
