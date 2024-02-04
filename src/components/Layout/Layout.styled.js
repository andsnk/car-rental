import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.header`
  background-color: #3470ff;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 2;
  padding: 10px;
  text-align: center;
  backdrop-filter: blur(10px);
  box-shadow: 4px 4px 8px 2px rgba(0, 0, 0, 0.2);
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 100px;
  justify-content: center;
  color: #ffffff;
`;

export const LayoutLink = styled(NavLink)`
  font-weight: 600;
  font-size: 14px;
  line-height: calc(20 / 14);
  padding: 12px 99px;
  &:hover {
    background-color: #fff;
    border-radius: 12px;
    color: #3470ff;
  }
`;
