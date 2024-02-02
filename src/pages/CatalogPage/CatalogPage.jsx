import React, { useEffect, useState } from 'react';
import { getCars } from '../../api/api';
import { CarsList, CarsItem, CarsImage, CarsTitle, InfoList, InfoItem, Button} from './CatalogPage.styled';

const CatalogPage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getCars();
        console.log(data);
        setCars(data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCars();
  }, []);

  return (
    <div>
      {/* <h1>Каталог автівок</h1> */}
      <CarsList>
        {cars.map(car => (
          <CarsItem key={car.id}>
            <CarsImage src={car.img} alt={car.make} />
            <CarsTitle>
              {car.make} <span> {car.model}</span>, <span>{car.year}</span>{' '}
              <span>{car.rentalPrice}</span>
            </CarsTitle>
            <InfoList>
              <InfoItem>{car.address.split(',')[1]}</InfoItem>
              <InfoItem>{car.address.split(',')[2]}</InfoItem>
              <InfoItem>{car.rentalCompany}</InfoItem>
              <InfoItem>{car.type}</InfoItem>
              <InfoItem>{car.model}</InfoItem>
              <InfoItem>{car.id}</InfoItem>
              {/* <InfoItem>{car.accessories[0].split(' ').slice(2)}</InfoItem> */}
              <InfoItem>{car.accessories[0].split(' ').slice(0, -1).join(' ')}</InfoItem>

            </InfoList>
            <Button>Learn more</Button>
          </CarsItem>
        ))}
      </CarsList>
    </div>
  );
};

export default CatalogPage;
