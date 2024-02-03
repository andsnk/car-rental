import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalBackground,
  ModalContent,
  ModalImage,
  ModalTitle,
  List,
  Item,
  CarInfo,
  InfoTitle,
  RentalList,
  RentalItem,
  RentalBtn,
  RentalSpan,
  TitleSpan
} from './Modal.styled';
const modalRootElement = document.querySelector('#modal');

const Modal = ({ openModal, onClose, selectedCar, children }) => {
  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    modalRootElement.appendChild(element);

    return () => {
      modalRootElement.removeChild(element);
    };
  }, [element]);

  const handleBackgroundClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (openModal && selectedCar) {
    return createPortal(
      <ModalBackground onClick={handleBackgroundClick}>
        <ModalContent>
          {children}
          <ModalImage src={selectedCar.img} alt={selectedCar.make} />
          <ModalTitle>
            {selectedCar.make} <TitleSpan> {selectedCar.model}</TitleSpan>,{' '}
            <span>{selectedCar.year}</span>
          </ModalTitle>
          <List>
            <Item>{selectedCar.address.split(',')[1]}</Item>
            <Item>{selectedCar.address.split(',')[2]}</Item>
            <Item>id: {selectedCar.id}</Item>
            <Item>Year: {selectedCar.year}</Item>
            <Item>Type: {selectedCar.type}</Item>
            <Item>Fuel Consumption: {selectedCar.fuelConsumption}</Item>
            <Item>Engine Size: {selectedCar.engineSize}</Item>
          </List>
          <CarInfo>{selectedCar.description}</CarInfo>
          <InfoTitle>Accessories and functionalities:</InfoTitle>
          <List>
            <Item>{selectedCar.accessories[0]}</Item>
            <Item>{selectedCar.accessories[1]}</Item>
            <Item>{selectedCar.accessories[2]}</Item>
          </List>
          <List>
            <Item>{selectedCar.functionalities[0]}</Item>
            <Item>{selectedCar.functionalities[1]}</Item>
            <Item>{selectedCar.functionalities[2]}</Item>
          </List>
          <InfoTitle>Rental Conditions: </InfoTitle>
          <RentalList>
            <RentalItem>
              {selectedCar.rentalConditions.split('').slice(0, 12).join('')}{' '}
              <RentalSpan>
                {selectedCar.rentalConditions.split('').slice(13, 15).join('')}
              </RentalSpan>
            </RentalItem>
            <RentalItem>
              {selectedCar.rentalConditions.split('').slice(15, 38).join('')}
            </RentalItem>
            <RentalItem>
              {selectedCar.rentalConditions.split('').slice(38, -1).join('')}
            </RentalItem>
            <RentalItem>
              Mileage: <RentalSpan>{selectedCar.mileage.toLocaleString('en-US')}</RentalSpan>
            </RentalItem>
            <RentalItem>Price: <RentalSpan>{selectedCar.rentalPrice}</RentalSpan></RentalItem>
          </RentalList>
          <RentalBtn href='tel:+380730000000'>Rental car</RentalBtn>
        </ModalContent>
      </ModalBackground>,
      element
    );
  }

  return null;
};

export default Modal;
