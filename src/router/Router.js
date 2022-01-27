import { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

const Document = lazy(() => import('../pages/Document'));
const Artboard = lazy(() => import('../pages/Artboard'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/document/:id" element={<Document />} />
          <Route path="/artboard/:id" element={<Artboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router