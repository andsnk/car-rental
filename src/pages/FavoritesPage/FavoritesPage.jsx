import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from '../../redux/favoriteCarsSlice';

import placeholderImage from '../../images/placeholder.webp';
import close from '../../images/close.svg';
import heart from '../../images/active.svg';


import {
  CarsList,
  CarsItem,
  CarsImage,
  CarsTitle,
  InfoList,
  InfoItem,
  ButtonMore,
  ButtonFavorite,
  CarModel,
  CarPrice,
  TitleCont,
  // LoadMoreButton,
  // MoreButtonWrap
} from '../CatalogPage/CatalogPage.styled';
import Modal from 'components/Modal/Modal';
import { CloseButton } from 'components/Modal/Modal.styled';

const FavoritesPage = () => {
  const favoriteCars = useSelector(state => state.favoriteCars.favoriteCars);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const dispatch = useDispatch();


  const handleOpenModal = car => {
    setSelectedCar(car);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedCar(null);
    setOpenModal(false);
  };

  const handleAddToFavorites = car => {
    dispatch(addToFavorites(car));
  };

  return (
    <CarsList>
      {favoriteCars.map(car => (
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
          <ButtonMore onClick={() => handleOpenModal(car)}>
            Learn more
          </ButtonMore>
          <ButtonFavorite onClick={() => handleAddToFavorites(car)}>
                <img src={heart} alt="heart" />
              </ButtonFavorite>
        </CarsItem>
      ))}
      <Modal
        openModal={openModal}
        onClose={handleCloseModal}
        selectedCar={selectedCar}
      >
        <CloseButton onClick={handleCloseModal}>
          <img src={close} alt="close" />
        </CloseButton>
      </Modal>
    </CarsList>
  );
};

export default FavoritesPage;
