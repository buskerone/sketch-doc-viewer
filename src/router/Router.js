import { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import LayoutHOC from '../hoc/LayoutHOC';

const Document = lazy(() => import('../pages/Document'));
const Artboard = lazy(() => import('../pages/Artboard'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/document/e981971c-ff57-46dc-a932-a60dc1804992" />} />
          <Route path="/document/:id" element={LayoutHOC(Document)} />
          <Route path="/document/:id/artboard/:id" element={LayoutHOC(Artboard)} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router