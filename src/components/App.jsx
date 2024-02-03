import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import Loader from './Loader/Loader';


const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() =>
  import('../pages/FavoritesPage/FavoritesPage')
);

export const App = () => {
  
  return (
    <Routes>
      <Route
        index
        element={
          <Suspense fallback={<Loader/>}>
            <HomePage />
          </Suspense>
        }
      />
      <Route path="/" element={<Layout />}>
        <Route
          path="/catalog"
          element={
            <Suspense fallback={<Loader/>}>
              <CatalogPage />
            </Suspense>
          }
        />
        <Route
          path="/favorites"
          element={
            <Suspense fallback={<Loader/>}>
              <FavoritesPage />
            </Suspense>
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
