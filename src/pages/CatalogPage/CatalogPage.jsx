import React, { useEffect, useState } from 'react';
import { getCars } from '../../api/api';
import { addToFavorites, removeFromFavorites } from '../../redux/favoriteCarsSlice';
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
    // Додайте будь-яку іншу логіку, яку ви хочете виконати після додавання до улюблених
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
      <CarsList>
        {cars.map((car) => (
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


// import React, { useEffect, useState } from 'react';
// import { getCars } from '../../api/api';
// import { CarsList, CarsItem, CarsImage, CarsTitle, InfoList, InfoItem, Button } from './CatalogPage.styled';
// import Modal from '../../components/Modal/Modal';

// const CatalogPage = () => {
//   const [cars, setCars] = useState([]);
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedCar, setSelectedCar] = useState(null);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const data = await getCars();
//         console.log(data);
//         setCars(data);
//       } catch (error) {
//         console.error('Error fetching cars:', error);
//       }
//     };

//     fetchCars();
//   }, []);

//   const handleOpenModal = (car) => {
//     setSelectedCar(car);
//     setOpenModal(true);
//   };

//   return (
//     <div>
//       <CarsList>
//         {cars.map(car => (
//           <CarsItem key={car.id}>
//             <CarsImage src={car.img} alt={car.make} />
//             <CarsTitle>
//               {car.make} <span> {car.model}</span>, <span>{car.year}</span>{' '}
//               <span>{car.rentalPrice}</span>
//             </CarsTitle>
//             <InfoList>
//               <InfoItem>{car.address.split(',')[1]}</InfoItem>
//               <InfoItem>{car.address.split(',')[2]}</InfoItem>
//               <InfoItem>{car.rentalCompany}</InfoItem>
//               <InfoItem>{car.type}</InfoItem>
//               <InfoItem>{car.model}</InfoItem>
//               <InfoItem>{car.id}</InfoItem>
//               <InfoItem>{car.accessories[0].split(' ').slice(0, -1).join(' ')}</InfoItem>
//             </InfoList>
//             <Button onClick={() => handleOpenModal(car)}>Learn more</Button>
//           </CarsItem>
//         ))}
//       </CarsList>
//       <Modal openModal={openModal} onClose={() => setOpenModal(false)} selectedCar={selectedCar}>
//         <button onClick={() => setOpenModal(false)}>x</button>
//       </Modal>
//     </div>
//   );
// };

// export default CatalogPage;
