import React from 'react'
import { useSelector } from 'react-redux';
import placeholderImage from '../../images/placeholder.webp'

import {
  CarsList,
  CarsItem,
  CarsImage,
  CarsTitle,
  InfoList,
  InfoItem,
  // Button,
  CarModel,
  CarPrice,
  TitleCont,
  // LoadMoreButton,
  // MoreButtonWrap
} from '../CatalogPage/CatalogPage.styled';

const FavoritesPage = () => {
  const favoriteCars = useSelector((state) => state.favoriteCars.favoriteCars);

  return (
    <CarsList>
    {favoriteCars.map((car) => (
      <CarsItem key={car.id}>
        <CarsImage src={car.img || placeholderImage} alt={car.make} />
        <TitleCont>
          <CarsTitle>
            {car.make} <CarModel> {car.model}</CarModel>,{' '}
            <span>{car.year}</span>
          </CarsTitle>
          <CarPrice>{car.rentalPrice}</CarPrice>
        </TitleCont>
        <InfoList>
          <InfoItem>{car.address.split(',')[1]}</InfoItem>
          <InfoItem>{car.address.split(',')[2]}</InfoItem>
          <InfoItem>{car.rentalCompany}</InfoItem>
          <InfoItem>{car.type}</InfoItem>
          <InfoItem>{car.model}</InfoItem>
          <InfoItem>{car.id}</InfoItem>
          <InfoItem>
            {car.accessories[0].split(' ').slice(0, -1).join(' ')}
          </InfoItem>
        </InfoList>
        {/* <Button onClick={() => handleOpenModal(car)}>Learn more</Button>
        <Button onClick={() => handleAddToFavorites(car)}>Add to Favorites</Button> */}
      </CarsItem>
    ))}
  </CarsList>
  );
}

export default FavoritesPage
