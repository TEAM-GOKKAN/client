import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import GlobalStyle from './lib/styles/global';

const LayoutPage = lazy(() => import('./pages/LayoutPage'));
const MyPage = lazy(() => import('./pages/MyPage'));
const MainPage = lazy(() => import('./pages/MainPage'));
const AuctionRegisterPage = lazy(() => import('./pages/AuctionRegisterPage'));
const ExpertWorkDetailPage = lazy(() => import('./pages/ExpertWorkDetailPage'));
const ExpertWorkListPage = lazy(() => import('./pages/ExpertWorkListPage'));
const SettingPage = lazy(() => import('./pages/SettingPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const TestPage = lazy(() => import('./pages/Testpage'));
const UserVerifyPage = lazy(() => import('./pages/UserVerifyPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));

function App() {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalStyle />
      <Routes location={background || location}>
        <Route path="/" element={<LayoutPage />}>
          <Route path="/" element={<MainPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
        <Route
          path="register/:pageNumber/:productId"
          element={<AuctionRegisterPage />}
        />
      </Routes>
      {background && (
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/myPage" element={<MyPage />} />
        </Routes>
      )}
    </Suspense>
  );
}

export default App;
