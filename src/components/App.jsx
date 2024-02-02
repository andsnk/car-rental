// import React, { Suspense, lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';

// import Layout from './Layout/Layout';

// const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
// const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
// const FavoritesPage = lazy(() =>
//   import('../pages/FavoritesPage/FavoritesPage')
// );

// export const App = () => {
//   return (
//     <Routes>
//         <Route index element={<HomePage />} />
//       <Route path="/" element={<Layout />}>
//         <Route path="/catalog" element={<CatalogPage />} />
//         <Route path="/favorites" element={<FavoritesPage />} />
//       </Route>
//         <Route path="*" element={<HomePage />} />
//     </Routes>
//   );
// };

import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';

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
          <Suspense fallback={<div>Loading HomePage...</div>}>
            <HomePage />
          </Suspense>
        }
      />
      <Route path="/" element={<Layout />}>
        <Route
          path="/catalog"
          element={
            <Suspense fallback={<div>Loading HomePage...</div>}>
              <CatalogPage />
            </Suspense>
          }
        />
        <Route
          path="/favorites"
          element={
            <Suspense fallback={<div>Loading HomePage...</div>}>
              <FavoritesPage />
            </Suspense>
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
