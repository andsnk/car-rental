import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.header`
  background-color: #3470ff;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 900;
  padding: 15px;
  text-align: center;
  backdrop-filter: blur(10px);
  box-shadow: 4px 4px 8px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  /* text-transform: uppercase; */
`;


export const NavContainer  = styled.nav`
display: flex;
gap: 200px;
justify-content: center;    
color: #ffffff
`

 export const LayoutLink  = styled(NavLink)`
font-weight: 600;
font-size: 24px;
padding: 18px 44px;

`
