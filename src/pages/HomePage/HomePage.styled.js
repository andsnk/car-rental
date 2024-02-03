import styled from 'styled-components';
import Image from '../../images/hero.webp';
import { Link } from 'react-router-dom';

export const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  /* justify-content: center; */
  align-items: center;
  color: white;
  /* opacity: 0.5; */
  &::before {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const HeroTitle = styled.h1`
margin: 150px 0 100px 0;
font-family: Montserrat;
font-size: 48px;
font-style: normal;
font-weight: 600;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
`

export const Button = styled(Link)`
 background-color: #3470FF;
 padding: 12px 99px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(20 / 14);
  
  &:hover {
    background-color:#0B44CD;
  }
`