import styled from 'styled-components';

export const CarsList = styled.ul`
  margin-top: 114px;
  padding-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(4, 274px);
  column-gap: 30px;
  row-gap: 50px;
  justify-content: center;
`;

export const CarsItem = styled.li`
  width: 274px;
  height: 426px;
  position: relative;
`;

export const CarsTitle = styled.h3`
  margin: 14px 0 8px 0;
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
`;
export const CarsImage = styled.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const InfoItem = styled.li`
  position: relative;
  padding-right: 6px;
  margin-left: 2px;
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  line-height: calc(18 / 12);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 1px;
    background-color: rgba(18, 20, 23, 0.1);
  }
`;

export const Button = styled.button`
  position: absolute;
  bottom: 0px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);
  border-radius: 12px;
  border: none;
  background: #3470ff;
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color:#0B44CD;
  }
`;
