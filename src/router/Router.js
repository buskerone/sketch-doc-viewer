import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Loader } from 'components';

const MainLayout = lazy(() => import('layouts/MainLayout'));
const Document = lazy(() => import('pages/Document'));
const Artboard = lazy(() => import('pages/Artboard'));

/**
 * Router
 *
 * @description all the routes are defined here
 * @author Carlos Knopel
 *
 * @returns React.Component
 */
const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <MainLayout>
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/document/e981971c-ff57-46dc-a932-a60dc1804992" />}
            />
            <Route path="/document/:documentId" element={<Document />} />
            <Route path="/document/:documentId/artboard/:artboardId" element={<Artboard />} />
          </Routes>
        </MainLayout>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
