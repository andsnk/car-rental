import React from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper ,NavContainer, LayoutLink} from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Wrapper>
        <NavContainer>
          <LayoutLink to="/">Home</LayoutLink>
          <LayoutLink to="/catalog">Catalog</LayoutLink>
          <LayoutLink to="/favorites">Favorites</LayoutLink>
        </NavContainer>
      </Wrapper>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
