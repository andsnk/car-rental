import React, { useEffect, useState } from 'react';
import { getCars } from '../../api/api';
import { addToFavorites } from '../../redux/favoriteCarsSlice';
import close from '../../images/close.svg';
import placeholderImage from '../../images/placeholder.webp'
import heart from '../../images/heart.svg'

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
  LoadMoreButton,
  MoreButtonWrap
} from './CatalogPage.styled';
import Modal from '../../components/Modal/Modal';
import { CloseButton } from 'components/Modal/Modal.styled';
import { useDispatch } from 'react-redux';

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [makes, setMakes] = useState([]); // Новий стейт для марок авто
  const [selectedMake, setSelectedMake] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [noScroll, setNoScroll] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);
  const dispatch = useDispatch(); 


  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getCars(page);
        const uniqueMakes = [...new Set(data.map(car => car.make))];
        setMakes(uniqueMakes);
        console.log(data);
        if (data.length === 0) {
          setHasMoreData(false);
        } else {
          setCars((prevCars) => [...prevCars, ...data]);
          setHasMoreData(true);
        }
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCars();
  }, [page]);

  const handleOpenModal = (car) => {
    setSelectedCar(car);
    setOpenModal(true);
    setNoScroll(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setNoScroll(false);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleAddToFavorites = (car) => {
    dispatch(addToFavorites(car));
  };

  useEffect(() => {
    if (noScroll) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [noScroll]);

  return (
    <div>
        <select value={selectedMake} onChange={(e) => setSelectedMake(e.target.value)}>
        <option value="">All Makes</option>
        {makes.map((make, index) => (
          <option key={index} value={make}>{make}</option>
        ))}
      </select>
      <CarsList>
        {cars
          .filter((car) => !selectedMake || car.make === selectedMake) // Фільтр за обраною маркою
          .map((car) => (
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
            <ButtonMore onClick={() => handleOpenModal(car)}>Learn more</ButtonMore>
            <ButtonFavorite onClick={() => handleAddToFavorites(car)}> <img src={heart} alt="close" /></ButtonFavorite>
          </CarsItem>
        ))}
      </CarsList>
    <MoreButtonWrap>
    {hasMoreData && (
        <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
      )}
    </MoreButtonWrap>
      <Modal
        openModal={openModal}
        onClose={handleCloseModal}
        selectedCar={selectedCar}
      >
        <CloseButton onClick={handleCloseModal}>
          <img src={close} alt="close" />
        </CloseButton>
      </Modal>
    </div>
  );
};

export default CatalogPage;
