import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from '../../redux/favoriteCarsSlice';
import { getFilterCars, getCars } from '../../api/api';
import { setMakeFilter, clearFilters } from '../../redux/filterSlice';
import Modal from '../../components/Modal/Modal';
import { CloseButton } from 'components/Modal/Modal.styled';
import close from '../../images/close.svg';
import placeholderImage from '../../images/placeholder.webp';
import heart from '../../images/heart.svg';
import makesData from '../../api/makes';

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
  MoreButtonWrap,
  Selector,
  SelectorWrap,
  ClearFilter
} from './CatalogPage.styled';

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [makes, setMakes] = useState([]); // Новий стейт для марок авто
  // eslint-disable-next-line
  const [selectedMake, setSelectedMake] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [noScroll, setNoScroll] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);
  const dispatch = useDispatch();
  const makeFilter = useSelector((state) => state.filter.make);

  
  useEffect(() => {
    const makesFromJson = makesData.map(make => make);
    setMakes(makesFromJson);
  }, []);

  useEffect(() => {
    fetchCars();
    // eslint-disable-next-line
  }, [page, makeFilter]);

  const fetchCars = async () => {
    try {
      let data;

      if (makeFilter) {
        data = await getFilterCars({ make: makeFilter, page, limit: 12 });
      } else {
        data = await getCars(page, 12);
      }

      if (page === 1) {
        setCars(data);
      } else {
        setCars((prevCars) => [...prevCars, ...data]);
      }

      setHasMoreData(data.length > 0);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };


  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleMakeChange = (selectedMake) => {
    dispatch(setMakeFilter(selectedMake));
    setPage(1);
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
    setPage(1);
  };


  const handleOpenModal = car => {
    setSelectedCar(car);
    setOpenModal(true);
    setNoScroll(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setNoScroll(false);
  };

  const handleAddToFavorites = car => {
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
     <SelectorWrap>
     <Selector
        value={selectedMake}
        onChange={e => handleMakeChange(e.target.value)}
      >
        <option value="">Select auto</option>
        {makes.map((make, index) => (
          <option key={index} value={make}>
            {make}
          </option>
        ))}
      </Selector>
      <ClearFilter onClick={handleClearFilters}>Clear Filter</ClearFilter>
     </SelectorWrap>
     

      <CarsList>
        {cars
          .filter(car => !selectedMake || car.make === selectedMake) 
          .map(car => (
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
                <img src={heart} alt="close" />
              </ButtonFavorite>
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
// // import { getCars } from '../../api/api';
// import { getFilterCars } from '../../api/api';
// import { addToFavorites } from '../../redux/favoriteCarsSlice';
// import close from '../../images/close.svg';
// import placeholderImage from '../../images/placeholder.webp';
// import heart from '../../images/heart.svg';
// import makesData from '../../api/makes';

// import {
//   CarsList,
//   CarsItem,
//   CarsImage,
//   CarsTitle,
//   InfoList,
//   InfoItem,
//   ButtonMore,
//   ButtonFavorite,
//   CarModel,
//   CarPrice,
//   TitleCont,
//   LoadMoreButton,
//   MoreButtonWrap,
//   Selector,
//   SelectorWrap
// } from './CatalogPage.styled';
// import Modal from '../../components/Modal/Modal';
// import { CloseButton } from 'components/Modal/Modal.styled';
// import { useDispatch } from 'react-redux';

// const CatalogPage = () => {
//   const [cars, setCars] = useState([]);
//   const [makes, setMakes] = useState([]); // Новий стейт для марок авто
//   const [selectedMake, setSelectedMake] = useState('');
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedCar, setSelectedCar] = useState(null);
//   const [noScroll, setNoScroll] = useState(false);
//   const [page, setPage] = useState(1);
//   const [hasMoreData, setHasMoreData] = useState(true);
//   const dispatch = useDispatch();
  
//   useEffect(() => {
//     const makesFromJson = makesData.map(make => make);
//     setMakes(makesFromJson);
//   }, []);


//   const handleMakeChange = async selectedMake => {
//     setSelectedMake(selectedMake);
//     setPage(1);
//     fetchCars();
//   };

//   const fetchCars = async () => {
//     try {
//       const data = await getFilterCars({ make: selectedMake });

//       if (page === 1) {
//         setCars(data);
//       } else {
//         setCars(prevCars => [...prevCars, ...data]);
//       }

//       setHasMoreData(data.length > 0);
//     } catch (error) {
//       console.error('Error fetching cars:', error);
//     }
//   };

//   useEffect(() => {
//     fetchCars();
//     // eslint-disable-next-line
//   }, [page, selectedMake,]);

//   const handleOpenModal = car => {
//     setSelectedCar(car);
//     setOpenModal(true);
//     setNoScroll(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     setNoScroll(false);
//   };

//   const handleLoadMore = () => {
//     setPage(prevPage => prevPage + 1);
//   };

//   const handleAddToFavorites = car => {
//     dispatch(addToFavorites(car));
//   };

//   useEffect(() => {
//     if (noScroll) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }

//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [noScroll]);

//   return (
//     <div>
//      <SelectorWrap>
//      <Selector
//         value={selectedMake}
//         onChange={e => handleMakeChange(e.target.value)}
//       >
//         <option value="">Select auto</option>
//         {makes.map((make, index) => (
//           <option key={index} value={make}>
//             {make}
//           </option>
//         ))}
//       </Selector>
//      </SelectorWrap>

//       <CarsList>
//         {cars
//           .filter(car => !selectedMake || car.make === selectedMake) // Фільтр за обраною маркою
//           .map(car => (
//             <CarsItem key={car.id}>
//               <CarsImage src={car.img || placeholderImage} alt={car.make} />
//               <TitleCont>
//                 <CarsTitle>
//                   {car.make} <CarModel> {car.model}</CarModel>,{' '}
//                   <span>{car.year}</span>
//                 </CarsTitle>
//                 <CarPrice>{car.rentalPrice}</CarPrice>
//               </TitleCont>
//               <InfoList>
//                 <InfoItem>{car.address.split(',')[1]}</InfoItem>
//                 <InfoItem>{car.address.split(',')[2]}</InfoItem>
//                 <InfoItem>{car.rentalCompany}</InfoItem>
//                 <InfoItem>{car.type}</InfoItem>
//                 <InfoItem>{car.model}</InfoItem>
//                 <InfoItem>{car.id}</InfoItem>
//                 <InfoItem>
//                   {car.accessories[0].split(' ').slice(0, -1).join(' ')}
//                 </InfoItem>
//               </InfoList>
//               <ButtonMore onClick={() => handleOpenModal(car)}>
//                 Learn more
//               </ButtonMore>
//               <ButtonFavorite onClick={() => handleAddToFavorites(car)}>
//                 {' '}
//                 <img src={heart} alt="close" />
//               </ButtonFavorite>
//             </CarsItem>
//           ))}
//       </CarsList>
//       <MoreButtonWrap>
//         {hasMoreData && (
//           <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
//         )}
//       </MoreButtonWrap>
//       <Modal
//         openModal={openModal}
//         onClose={handleCloseModal}
//         selectedCar={selectedCar}
//       >
//         <CloseButton onClick={handleCloseModal}>
//           <img src={close} alt="close" />
//         </CloseButton>
//       </Modal>
//     </div>
//   );
// };

// export default CatalogPage;
