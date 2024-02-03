import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  z-index: 12000;
  width: 541px;
  /* height: 752px; */  
  background: white;
  padding: 40px;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  border-radius: 24px;
  transform: translate(-50%, -50%);
`;

export const CloseButton = styled.button`
  position: absolute;
  display: flex;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: calc(24 / 18);
  margin: 14px 0 8px 0;
`;

export const List = styled.ul`
  /* width: 288px; */
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const Item = styled.li`
  position: relative;
  padding-right: 6px;
  margin-left: 2px;
  color: rgba(18, 20, 23, 0.5);
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

export const CarInfo = styled.p`
  color: #121417;
  font-size: 14px;
  line-height: 20px calc(20 / 14);
  margin-top: 14px;
`;

export const InfoTitle = styled.h3`
  margin-top: 24px;
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(20 / 14);
  margin-bottom: 8px;
`;
export const RentalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
export const RentalItem = styled.li`
  color: #363535;
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
  /* font-family: Montserrat; */
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.24px;
`;
export const RentalBtn = styled.button`
  /* position: absolute; */
  /* bottom: 0px; */
  margin-top: 24px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);
  border-radius: 12px;
  border: none;
  background: #3470ff;
  display: flex;
  /* width: 274px;
  height: 44px; */
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color:#0B44CD;
  }
`;

export const TitleSpan = styled.span`
color: #3470FF;

`

export const RentalSpan = styled.span`
color: #3470FF;
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: 18px;
letter-spacing: -0.24px;
`