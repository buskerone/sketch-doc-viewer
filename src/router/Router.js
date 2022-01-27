import { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import LayoutHOC from '../hoc/LayoutHOC';

const Document = lazy(() => import('../pages/Document'));
const Artboard = lazy(() => import('../pages/Artboard'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/document/:id" element={LayoutHOC(Document)} />
          <Route path="/artboard/:id" element={LayoutHOC(Artboard)} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router