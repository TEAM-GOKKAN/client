import { Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import GlobalStyle from './lib/styles/global';

const LayoutPage = lazy(() => import('./pages/LayoutPage'));
const MainPage = lazy(() => import('./pages/MainPage'));
const LotDetailPage = lazy(() => import('./pages/LotDetailPage'));
const BidConfirmModal = lazy(
  () => import('./components/LotDetail/Bid/BidConfirmModal')
);

function App() {
  const location = useLocation();
  const background = location.state?.background;
  console.log(background);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalStyle />
      <Routes location={background || location}>
        <Route path="/" element={<LayoutPage />}>
          <Route path="/" element={<MainPage />} />
          <Route path="auction/1" element={<LotDetailPage />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="/auction/1/bid" element={<BidConfirmModal />} />
        </Routes>
      )}
    </Suspense>
  );
}

export default App;
